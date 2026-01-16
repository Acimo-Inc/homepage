"use client";
import { motion } from "framer-motion";

const levels = [
    {
        level: "Level 0",
        name: "No Navigation Automation",
        narrative:
            "The user performs all aspects of the dynamic ambulation task (DAT), utilizing only passive aids like a white cane or biological guide dog.",
        steering: "Human",
        monitoring: "Human",
        fallback: "Human",
    },
    {
        level: "Level 1",
        name: "Navigation Assistance",
        narrative:
            "The system provides continuous Object and Event Detection and Response (OEDR) information (e.g., semantic audio warnings) but does not execute physical steering or propulsion.",
        steering: "Human",
        monitoring: "Human (System augments perception)",
        fallback: "Human",
    },
    {
        level: "Level 2",
        name: "Partial Navigation Automation",
        narrative:
            "The system executes Lateral Control (steering/centering) via active braking or wheels. The user retains Longitudinal Control (propulsion) and must constantly supervise the path.",
        steering: "System (Steering) & Human (Propulsion)",
        monitoring: "Human",
        fallback: "Human",
    },
    {
        level: "Level 3",
        name: "Conditional Navigation Automation",
        narrative:
            "The system performs the entire DAT (Steering & Propulsion) within a specific Operational Design Domain (ODD). The user acts as the fallback-ready user if the system encounters a failure mode.",
        steering: "System",
        monitoring: "System",
        fallback: "Human",
    },
    {
        level: "Level 4",
        name: "High Navigation Automation",
        narrative:
            "The system performs all DAT tasks within a geofenced ODD (e.g., airports, museums). No user intervention is required. If the system fails, it enters a minimal risk condition automatically.",
        steering: "System",
        monitoring: "System",
        fallback: "System",
    },
    {
        level: "Level 5",
        name: "Full Navigation Automation",
        narrative:
            "The system performs all DAT tasks under all environmental conditions navigable by a skilled human pedestrian (e.g., unstructured trails, crowds).",
        steering: "System",
        monitoring: "System",
        fallback: "System",
    },
];

export default function LevelsOfAutomation() {
    return (
        <section
            id="levels-of-automation"
            className="py-24 px-6 md:px-12 max-w-7xl w-full mx-auto border-t border-neutral-100"
        >
            <div className="mb-16 flex flex-col gap-4">
                <p className="text-sm font-mono text-neutral-400 uppercase">Standard</p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif text-neutral-900"
                >
                    Levels of Automation
                </motion.h2>
                <p className="text-neutral-500 max-w-6xl">
                    Levels of Autonomous Navigation for Visually Impaired (LAN-VI) is adapted from SAE J3016 for visually impaired navigation. Each level clarifies who
                    steers, who watches, and who handles fallback.
                </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200">
                <div className="grid grid-cols-10 bg-neutral-50 text-sm font-semibold text-neutral-800">
                    <div className="col-span-1 px-4 py-4 border-r border-neutral-200">Level</div>
                    <div className="col-span-2 px-4 py-4 border-r border-neutral-200">Name</div>
                    <div className="col-span-3 px-4 py-4 border-r border-neutral-200">Narrative Definition</div>
                    <div className="col-span-2 px-4 py-4 border-r border-neutral-200">Execution of Steering / Propulsion</div>
                    <div className="col-span-2 px-4 py-4">Monitoring / Fallback</div>
                </div>

                <div className="divide-y divide-neutral-200 bg-white">
                    {levels.map((item, idx) => (
                        <motion.div
                            key={item.level}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="grid grid-cols-10 text-sm md:text-base"
                        >
                            <div className="col-span-1 px-4 py-6 font-semibold text-neutral-900 border-r border-neutral-100">
                                {item.level}
                            </div>
                            <div className="col-span-2 px-4 py-6 font-serif text-neutral-900 border-r border-neutral-100">
                                {item.name}
                            </div>
                            <div className="col-span-3 px-4 py-6 text-neutral-700 leading-relaxed border-r border-neutral-100">
                                {item.narrative}
                            </div>
                            <div className="col-span-2 px-4 py-6 font-semibold text-neutral-900 border-r border-neutral-100">
                                {item.steering}
                            </div>
                            <div className="col-span-2 px-4 py-6 text-neutral-700 leading-relaxed">
                                <div className="font-semibold text-neutral-900">Monitoring: {item.monitoring}</div>
                                <div className="font-semibold text-neutral-900">Fallback: {item.fallback}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <p className="text-center text-xs text-neutral-400 mt-6">
                Table: Levels of Autonomous Navigation for Visually Impaired (LAN-VI) — Adapted from SAE J3016
            </p>
        </section>
    );
}

