import Button from "../buttons/Button";
import GlassCard from "../cards/GlassCard";
import AnnouncementCard from "../cards/AnnouncementCard";

export default function AnnouncementSection() {
    return (
        <div className="w-full relative">
            <GlassCard>
                <div className="h-[50px]">
                    <div className="flex items-center justify-between bg-white/30 border-b border-white/30 w-full rounded-t-2xl px-5 py-4 absolute left-0 top-0">
                        <h1 className="text-xl font-bold">
                            Announcements preview
                        </h1>
                        <Button>View More</Button>
                    </div>
                </div>
                <div className="pt-6 space-y-3">
                    <AnnouncementCard 
                        name="Sam guy"
                        userName="@samguy"
                        userImage="/images/user/user-9.png"
                        announcementTitle="Live video session "
                        description={
                            <span>
                                <span className="cursor-pointer text-[#276AEE]">COACH GORDAN</span>
                                <span> & </span>
                                <span className="cursor-pointer text-[#276AEE]">COACH MCCULLUM </span>
                                <span>Live video session</span>
                            </span>
                        }
                        timeStamp="8 hours ago"
                        image="/images/announcement/p-1.png"
                        isLive={true}
                        likeCount={20}
                        replyCount={34}
                    />
                    <AnnouncementCard 
                        name="Another guy"
                        userName="@anotherguy"
                        userImage="/images/user/user-92.png"
                        announcementTitle="Live video session "
                        description={
                            <h4 className="text-[#141B34B2]">
                                Join us for our Friday morning casual bike ride around central park! We will meet you all @6AM EST
                                <br />
                                near Great Lawn Softball Field 7!
                            </h4>
                        }
                        timeStamp="8 hours ago"
                        image="/images/announcement/p-2.png"
                        isLive={false}
                        likeCount={12}
                        replyCount={21}
                        withAction={true}
                        withMapMarker={true}
                    />
                </div>
            </GlassCard>
        </div>
    );
}
