import Image from "next/image";

export default function StreakCard() {
    const streakDays = ["M", "T", "W", "T", "F", "S", "S",
        "OK","OK","OK","OK", "23", "24", "25"
     ];
    return (
        <div
            className="p-4 rounded-3xl w-[317px]"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        >
            <div className="flex items-center justify-between">
                <div className="text-[#141B34] font-semibold">
                    Active Streak
                </div>

                <div className="flex gap-1">
                    <div
                        className="py-2.5 px-3 rounded-full text-white font-semibold text-xs"
                        style={{
                            background:
                                "linear-gradient(to bottom right, rgba(253,182,49,1), rgba(236,66,19,1))",
                        }}
                    >
                        Hot Streak
                    </div>
                    <div className="bg-white text-2xl w-10 h-10 px-2.5 py-2 flex items-center justify-center rounded-full">
                        🔥
                    </div>
                </div>
            </div>

            <div className="pt-4 text-[#141B34CC]/80">
                <div className="text-[28px] font-semibold">12 Days</div>
                <div className="text-[10px] font-medium">Next milestone: 15 days</div>
            </div>

            <div className="grid grid-cols-7 mt-4 gap-y-1 gap-x-5">
                {streakDays.map((day, index) => (
                    <div key={index} className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium">
                        {day === "OK" ? <CheckedDay /> : day}
                    </div>
                ))}
            </div>
        </div>
    );
}




function CheckedDay() {
    return (
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-linear-to-br from-[#5C8FF7] to-[#276AEE]">
            <Image src="/images/icons/check.svg" alt="checked-day-icon" width={10} height={10} />
        </div>
    );
}
    