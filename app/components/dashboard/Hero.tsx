import Image from "next/image";
import CircularProgressBar from "./components/CircularProgressBar";
import StreakCard from "./components/StreakCard";
import ProgressSpeedometer from "./components/CircularProgressBar";

export default function Hero() {
    return (
        <div className="w-full h-[425px] bg-white/30 border-l border-t border-white/60 rounded-3xl overflow-hidden relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[200px] after:bg-gradient-to-t after:from-white after:to-transparent after:pointer-events-none after:rounded-b-2xl">
            <Image
                src="/images/hero-image.png"
                alt="hero-image"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-7">
                <h1 className="text-5xl font-bold text-white">
                    The QB Fundamentals
                </h1>
            </div>
            <div className="absolute bottom-7 left-7 flex items-end space-x-1 w-full z-50">
                <div className="bg-white opacity-90 py-2.5 px-2 rounded-2xl flex w-[164px] items-center space-x-2">
                    <div className="flex items-center justify-center h-10 w-10">
                        <Image
                            src="/images/icons/user-group.svg"
                            alt="user-group-icon"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div>
                        <p className="text-black/70 text-xs font-medium">
                            Total Athletes
                        </p>
                        <div className="flex">
                            <p className="text-[#141B34] text-xl font-semibold">
                                65
                            </p>
                            <div className="flex items-center space-x-0.5 pl-2">
                                <p className="text-[#38AA4B] text-xs font-medium">
                                    +12
                                </p>
                                <Image
                                    src="/images/icons/growth.svg"
                                    alt="growth-icon"
                                    width={14}
                                    height={14}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white opacity-90 py-2.5 px-3 rounded-2xl flex w-[197px] items-center space-x-2">
                    <div className="flex items-center justify-center h-10 w-10">
                        <Image
                            src="/images/icons/medal-02.svg"
                            alt="medal-icon"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div>
                        <p className="text-black/70 text-xs font-medium">
                            Projected Ranking
                        </p>
                        <div className="flex">
                            <p className="text-[#141B34] text-xl font-semibold">
                                #5
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white opacity-90 py-2.5 px-3 rounded-2xl flex w-full max-w-[263px] items-center justify-between">
                    <div>
                        <div className="text-xs font-medium">Consistency Score</div>
                        <div className="text-[10px] text-[#141B34B2]/70">last 30 days</div>
                    </div>
                    <ProgressSpeedometer value={65} color="#276AEE" backgroundColor="rgba(122, 211, 255, 0.3)" />
                </div>
                
                <div className="bg-white opacity-90 py-2.5 px-3 rounded-2xl flex w-full max-w-[263px] items-center justify-between">
                    <div>
                        <div className="text-xs font-medium">Weekly Progress</div>
                    </div>
                    <ProgressSpeedometer value={35} color="#12D85B" backgroundColor="rgba(18, 216, 91, 0.2)" />
                </div>
                
                <div className="pl-2">
                    <StreakCard />
                </div>
            </div>
        </div>
    );
}
