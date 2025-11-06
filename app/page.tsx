import Hero from "./components/dashboard/Hero";
import BlueEllipse from "./components/layout/BlueEllipse";
import ContinueSection from "./components/ui/ContinueSection";
import RecentActivity from "./components/ui/RecentActivity";

export default function Home() {
    return (
        <div className="space-y-4">
            <Hero />
            <div className="flex items-start w-full space-x-4">
                <ContinueSection />
                <RecentActivity />
            </div>
        </div>
    );
}
