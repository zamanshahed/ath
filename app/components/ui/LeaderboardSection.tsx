import Button from "../buttons/Button";
import GlassCard from "../cards/GlassCard";
import LeaderboardCard from "../cards/LeaderboardCard";

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
            </GlassCard>
        </div>
    );
}
