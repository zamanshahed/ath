"use client";

import { useRef } from "react";
import Hero from "./components/dashboard/Hero";
import CoachFeedbackSection from "./components/ui/CoachFeedbackSection";
import ContinueSection from "./components/ui/ContinueSection";
import RecentActivity from "./components/ui/RecentActivitySection";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const scrollTop = containerRef.current?.scrollTop || 0;
        if (scrollTop === 0) {
            console.log("✅ Scrolled to the top!");
        }
    };
    return (
        <div ref={containerRef} onScroll={handleScroll} className="space-y-4">
            <Hero />
            <div className="flex items-start w-full space-x-4">
                <ContinueSection />
                <div className="space-y-4">
                    <RecentActivity />
                    <CoachFeedbackSection />
                </div>
            </div>
        </div>
    );
}
