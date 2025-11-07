import Button from "../buttons/Button";
import GlassCard from "../cards/GlassCard";

export default function AnnouncementSection() {
    return (
        <div className="w-full relative">
            <GlassCard>
                <div className="h-[300px]">
                    <div className="flex items-center justify-between bg-white/30 border-b border-white/30 w-full rounded-t-2xl px-5 py-4 absolute left-0 top-0">
                        <h1 className="text-xl font-bold">
                            Announcements preview
                        </h1>
                        <Button>View More</Button>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
