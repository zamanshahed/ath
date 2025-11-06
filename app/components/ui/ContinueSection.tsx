import Button from "../Button";
import GlassCard from "../cards/GlassCard";

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
                </div>
            </GlassCard>
        </div>
    );
}
