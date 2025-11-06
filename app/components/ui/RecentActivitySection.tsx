import Image from "next/image";
import Button from "../Button";
import GlassCard from "../cards/GlassCard";
import RecentActivityCard from "../cards/RecentActivityCard";

export default function RecentActivity() {
    return (
        <div className="w-full">
            <GlassCard>
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-2 items-center">
                            <h2 className="text-xl font-semibold">
                                Recent Activity
                            </h2>
                            <div className="relative">
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fdbfc1] w-3 h-3 rounded-full"></div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-br from-[#FF6565] to-[#EC4213] w-2 h-2 rounded-full"></div>
                            </div>
                            <div className="text-[#F20004] text-xs font-bold">
                                LIVE
                            </div>
                        </div>
                        <div className="flex space-x-5">
                            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                                <Image
                                    src={"/images/icons/settings.svg"}
                                    alt="settings-icon"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <Button>View more</Button>
                        </div>
                    </div>

                    <div className="pt-4">
                        <RecentActivityCard
                            isActive={true}
                            title="Coach Bronson added a task"
                            description="Check the itinerary for optimization suggestions."
                            timeString="1min ago"
                        />
                        <RecentActivityCard
                            title="Coach Johnny  gave feedback on your submission"
                            isFeedbackType={true}
                            timeString="1min ago"
                        />
                        <RecentActivityCard
                            title="Coach Sarah replied to your comment"
                            description="Check the itinerary for optimization suggestions."
                            timeString="1min ago"
                        />
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
