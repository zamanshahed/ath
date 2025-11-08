import Button from "../buttons/Button";
import GlassCard from "../cards/GlassCard";
import LeaderboardCard from "../cards/LeaderboardCard";
import LeadUserCard from "../cards/LeadUserCard";
import LeaderboardList from "./component/LeaderboardList";

export default function LeaderboardSection() {
    return (
        <div className="w-full">
            <GlassCard>
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">Leaderboard</h1>
                    <Button>View More</Button>
                </div>
                <div className="pt-6">
                    <LeaderboardCard />
                </div>

                <div className="pt-4">
                   <LeaderboardList />
                </div>
            </GlassCard>
        </div>
    );
}
