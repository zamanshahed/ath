import Button from "../buttons/Button";
import GlassCard from "../cards/GlassCard";
import LeaderboardCard from "../cards/LeaderboardCard";
import LeadUserCard from "../cards/LeadUserCard";

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

                <div className="pt-4 space-y-3">
                    <LeadUserCard
                        name="Jane Cooper"
                        points={210}
                        position={4}
                        image="/images/user/l4.png"
                    />
                    <LeadUserCard
                        name="Ronald Richards"
                        points={197}
                        position={5}
                        image="/images/user/l5.png"
                    />
                    <LeadUserCard
                        name="Marvin McKinney"
                        points={185}
                        position={6}
                        image="/images/user/l6.png"
                    />
                    <LeadUserCard
                        name="Kristin Watson"
                        points={184}
                        position={  7}
                        image="/images/user/l7.png"
                    />
                    <LeadUserCard
                        name="Esther Howard"
                        points={172}
                        position={8}
                        image="/images/user/l8.png"
                    />
                </div>
            </GlassCard>
        </div>
    );
}
