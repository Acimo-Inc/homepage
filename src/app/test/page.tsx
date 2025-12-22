'use client';

import { useState, useRef, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const SERVICE_UUID = '12345678-1234-5678-1234-56789abcdef0';
const CHAR_UUID = '12345678-1234-5678-1234-56789abcdef1';

export default function ZodiacConsole() {
    // @ts-ignore
    const [device, setDevice] = useState<BluetoothDevice | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    // @ts-ignore
    const characteristicRef = useRef<BluetoothRemoteGATTCharacteristic | null>(null);
    const [motorSpeeds, setMotorSpeeds] = useState([0, 0, 0, 0]);

    const logsContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (logsContainerRef.current) {
            const container = logsContainerRef.current;
            container.scrollTo({
                top: container.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [logs]);

    const addLog = (msg: string) => {
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        setLogs((prev) => [...prev, `[${time}] ${msg}`]);
    };

    const connectBluetooth = async () => {
        try {
            addLog('Searching for Zodiac device...');
            // @ts-ignore
            const device = await navigator.bluetooth.requestDevice({
                filters: [{ namePrefix: 'Zodiac' }],
                optionalServices: [SERVICE_UUID],
                // acceptAllDevices: true,
            });

            addLog(`Device found: ${device.name}`);
            const server = await device.gatt?.connect();
            const service = await server?.getPrimaryService(SERVICE_UUID);
            const char = await service?.getCharacteristic(CHAR_UUID);

            if (char) {
                characteristicRef.current = char;
                setDevice(device);
                setIsConnected(true);
                addLog('✅ Connection established successfully.');

                device.addEventListener('gattserverdisconnected', () => {
                    setIsConnected(false);
                    addLog('❌ Device disconnected.');
                });
            }
        } catch (error) {
            console.error(error);
            addLog(`Connection failed: ${error}`);
        }
    };

    const sendCommand = async (motorId: number, speed: number) => {
        if (!characteristicRef.current || !isConnected) return;
        try {
            const data = new Uint8Array([motorId, speed]);
            await characteristicRef.current.writeValue(data);
        } catch (e) {
            addLog(`TX Error: ${e}`);
        }
    };

    const handleSliderChange = (index: number, val: number) => {
        const newSpeeds = [...motorSpeeds];
        newSpeeds[index] = val;
        setMotorSpeeds(newSpeeds);
        sendCommand(index + 1, val);
    };

    return (
        <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">

            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">

                {/* Hero Title */}
                <div className="text-center mb-20 space-y-6">
                    <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-gray-900">
                        Hardware Console
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        Directly manipulate the haptic feedback engines of the Zodiac device.
                        Ensure Bluetooth is enabled on your device.
                    </p>
                    <div>
                        {!isConnected ? (
                            <button
                                onClick={connectBluetooth}
                                className="mx-auto group flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
                            >
                                Connect Device
                                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        ) : (
                            <div className="mx-auto flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-green-700 tracking-wider">ONLINE</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Controls */}
                    <div className="space-y-10">
                        <div className="border-b border-gray-200 pb-4 mb-6">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Haptic Engines</h2>
                        </div>

                        {/* Motor Sliders */}
                        <div className="space-y-8">
                            {[0, 1, 2, 3].map((idx) => (
                                <div key={idx} className="group">
                                    <div className="flex justify-between mb-3 items-end">
                                        <label className="font-serif text-xl text-gray-900">
                                            Motor <span className="text-gray-300 ml-1">0{idx + 1}</span>
                                        </label>
                                        <span className="font-mono text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                            {motorSpeeds[idx]}%
                                        </span>
                                    </div>

                                    <div className="relative h-6 flex items-center">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={motorSpeeds[idx]}
                                            onChange={(e) => handleSliderChange(idx, parseInt(e.target.value))}
                                            disabled={!isConnected}
                                            className="
                                                absolute w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer
                                                disabled:cursor-not-allowed disabled:opacity-50
                                                [&::-webkit-slider-thumb]:appearance-none
                                                [&::-webkit-slider-thumb]:w-4
                                                [&::-webkit-slider-thumb]:h-4
                                                [&::-webkit-slider-thumb]:rounded-full
                                                [&::-webkit-slider-thumb]:bg-black
                                                [&::-webkit-slider-thumb]:transition-transform
                                                [&::-webkit-slider-thumb]:hover:scale-125
                                            "
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Logs / Status */}
                    <div className="bg-gray-50 rounded-[2rem] p-8 h-[400px] flex flex-col relative overflow-hidden border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-4 shrink-0">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">System Logs</h2>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                            </div>
                        </div>

                        {/* Log Output */}
                        <div ref={logsContainerRef} className="flex-1 overflow-y-auto font-mono text-xs text-gray-600 space-y-2 pr-2 custom-scrollbar scroll-smooth">
                            {logs.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-gray-300 space-y-2">
                                    <span className="text-2xl opacity-50">⚡️</span>
                                    <span>Waiting for connection...</span>
                                </div>
                            )}

                            {logs.map((log, i) => (
                                <div key={i} className="border-l-2 border-gray-200 pl-3 py-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    {log}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}