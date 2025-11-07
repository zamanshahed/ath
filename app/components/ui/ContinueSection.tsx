import Button from "../buttons/Button";
import GlassCard from "../cards/GlassCard";
import VidCard from "../cards/VidCard";
import TaskSection from "./TaskSection";

export default function ContinueSection() {
    return (
        <div className="w-full max-w-[800px]">
            <GlassCard>
                <div className="h-[800px]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Continue Where You Left off
                        </h2>
                        <Button>View more</Button>
                    </div>

                    <div className="flex space-x-3 pt-4 overflow-x-auto">
                        <VidCard title="Review Approach Feedback" image="/images/thumbs/vid-01.png" progress={70} due="Due Today" />
                        <VidCard isActive title="Review Ghost Rush Technique feedback" image="/images/thumbs/vid-02.png" progress={0} due="Due Tomorrow" />
                        <VidCard isOrangeDot title="Film Breakdown: Elite Pass Rush" image="/images/thumbs/vid-03.png" progress={70} due="Due Tomorrow" />
                    </div>

                    <div className="pt-4">
                        <TaskSection />
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
