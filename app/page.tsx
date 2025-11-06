import Hero from "./components/dashboard/Hero";
import BlueEllipse from "./components/layout/BlueEllipse";
import CoachFeedbackSection from "./components/ui/CoachFeedbackSection";
import ContinueSection from "./components/ui/ContinueSection";
import RecentActivity from "./components/ui/RecentActivitySection";

export default function Home() {
    return (
        <div className="space-y-4">
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
