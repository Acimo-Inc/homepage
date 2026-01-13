"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
    {
        question: "Q1. What is Zodiac?",
        answer: "A1. Zodiac is the world’s first portable navigation device designed specifically for the visually impaired. It constantly monitors your surroundings as you walk, sit, or navigate stairs, providing real-time feedback through integrated haptic engines."
    },
    {
        question: "Q2. What does Zodiac look like?",
        answer: "A2. The current version consists of two hardware components and a dedicated mobile app. The hardware includes a chest strap to secure your phone and a headset equipped with haptic engines and bone-conduction earphones. The software runs directly on your smartphone."
    },
    {
        question: "Q3. How does Zodiac compare to other products in the field?",
        answer: "A3. Unlike competitors that require expensive, standalone devices with steep learning curves, Zodiac leverages the power of your existing smartphone. Our haptic feedback is intuitive and easy to learn, while bone-conduction technology ensures your ears remain unobstructed for environmental awareness. Most other solutions are significantly more expensive and offer more limited performance."
    },
    {
        question: "Q4. What are Zodiac’s key features?",
        answer: "A4. Zodiac provides precise indoor navigation (e.g., \"take me to the nearest restroom\" or \"guide me to the closet\") and helps you avoid outdoor obstacles like utility poles, bicycles, and pedestrians. Additionally, it features an emergency function to quickly contact your designated emergency list."
    },
    {
        question: "Q5. How do you handle privacy and security?",
        answer: "A5. Privacy is a core priority. All processing happens through our proprietary software and hardware. Your voice prompts, video streams, and contact information are strictly private; we never share, sell, or use your data for AI training."
    },
    {
        question: "Q6. What is your purchase and return policy?",
        answer: "A6. Details regarding our purchase and referral programs will be released soon. We currently offer a 14-day return policy if the product does not meet your expectations or if you encounter any technical malfunctions."
    },
    {
        question: "Q7. Can I purchase Zodiac using medical insurance?",
        answer: "A7. Zodiac is not currently covered by insurance providers, but we are actively working on certifications to make the device more affordable and accessible to everyone."
    },
    {
        question: "Q8. How does the subscription model work?",
        answer: "A8. You can purchase the hardware kit (headset and chest strap) for $99. The software includes a 7-day free trial, after which full service requires a subscription of $49 per month or $499 per year."
    },
    {
        question: "Q9. When will the product ship?",
        answer: "A9. Version 1 (V1) will launch via a crowdfunding campaign. Once the round is complete, we will move immediately into manufacturing. We expect to begin shipping within three months of the campaign's conclusion."
    }
];

export default function QandA() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl w-full mx-auto border-t border-neutral-100">
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif mb-8 text-neutral-900"
                >
                    Common Questions
                </motion.h2>
            </div>

            <div className="w-full">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-neutral-200">
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="flex items-center justify-between w-full py-6 text-left group"
                        >
                            <span className="text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                                {faq.question}
                            </span>
                            <motion.span
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-4 text-neutral-400 group-hover:text-neutral-600"
                            >
                                <FiChevronDown className="w-6 h-6" />
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-6 text-neutral-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
