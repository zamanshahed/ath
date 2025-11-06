import Image from "next/image";
import React from "react";
import RoundCard from "./RoundCard";

export default function Topbar() {
    return (
        <div className="fixed top-3 left-0 right-0 z-50 w-full bg-transparent">
            <div className="mx-auto px-12">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-12">
                        <Image
                            src={"/images/logo.png"}
                            alt="banner-logo"
                            width={32}
                            height={28}
                        />

                        <div className="space-y-1">
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
                                <div className="relative w-full bg-white/30 backdrop-blur-2xl border-x border-white/20 p-6 flex items-center gap-4">
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
                            <RoundCard icon={<Image src={"/images/icons/messages.svg"} alt="message-icon" width={20} height={20} />} />
                            <RoundCard icon={<Image src={"/images/icons/notifications.svg"} alt="message-icon" width={20} height={20} />} unreadCount={6} />
                            <Image src={"/images/icons/user.svg"} alt="athlete-icon" width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
