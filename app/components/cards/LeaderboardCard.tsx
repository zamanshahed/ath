import Image from "next/image";
import React from "react";

export default function LeaderboardCard() {
    return (
        <div className="h-[400px] bg-white/65 rounded-[20px] relative overflow-hidden">
            <Image
                src="/images/leaderboard-bg.png"
                alt="leaderboard"
                width={400}
                height={400}
                className="absolute left-[-40px] bottom-[-110px] w-full h-full object-cover rotate-[150deg] blur-3xl opacity-70"
            />

            {/* <Image
                src="/images/lead/lead-01.svg"
                alt="leaderboard"
                width={160}
                height={300}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
            />

            <Image
                src="/images/lead/lead-02.svg"
                alt="leaderboard"
                width={116}
                height={180}
                className="absolute left-[45px] bottom-[70px] object-cover"
            />

            <Image
                src="/images/lead/lead-01.svg"
                alt="leaderboard"
                width={160}
                height={300}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
            /> */}
        </div>
    );
}
