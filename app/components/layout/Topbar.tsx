import Image from "next/image";
// import GlassCard from "../cards/GlassCard";
import RoundCard from "./RoundCard";

export default function Topbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[99999] w-full bg-white/20 backdrop-blur-[10px] py-2 border-b border-white/20">
            <div className="mx-auto px-12">
                {/* <GlassCard> */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-12">
                            <Image
                                src={"/images/logo.png"}
                                alt="banner-logo"
                                width={32}
                                height={28}
                            />

                            <div className="space-y-0.5">
                                <h3>Welcome Back, Mark</h3>
                                <span className="font-medium">
                                    <span className="text-black/40 pr-2">
                                        Overview/
                                    </span>
                                    <span>Athlete Program Dashboard</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center justify-center bg-transparent">
                                <div className="w-full max-w-[402px]">
                                    <div className="relative w-full bg-white/30 rounded-full overflow-hidden backdrop-blur-2xl border-x border-white/20 px-4 py-2 flex items-center gap-4">
                                        <Image
                                            src={"/images/icons/search.svg"}
                                            alt="Search-icon"
                                            width={20}
                                            height={20}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="flex-1 bg-transparent border-none outline-none text-lg placeholder-black/60 font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="px-5">
                                <div className="h-7 w-px bg-black/20" />
                            </div>

                            <div className="flex space-x-[15px]">
                                <RoundCard
                                    icon={
                                        <Image
                                            src={"/images/icons/messages.svg"}
                                            alt="message-icon"
                                            width={20}
                                            height={20}
                                        />
                                    }
                                />
                                <RoundCard
                                    icon={
                                        <Image
                                            src={
                                                "/images/icons/notifications.svg"
                                            }
                                            alt="message-icon"
                                            width={20}
                                            height={20}
                                        />
                                    }
                                    unreadCount={6}
                                />
                                <Image
                                    src={"/images/icons/user.svg"}
                                    alt="athlete-icon"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>
                {/* </GlassCard> */}
            </div>
        </div>
    );
}
