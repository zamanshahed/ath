
export default function DateCard({
    dayName,
    value,
    isActive,
    isOrangeDot = false,
    isBlueDot = false,
}: {
    dayName: string;
    value: string;
    isActive?: boolean;
    isOrangeDot?: boolean;
    isBlueDot?: boolean;
}) {
    return (
        <div
            style={{
                filter: isActive
                    ? "drop-shadow(0px 4px 15.7px rgba(188, 204, 255, 0.51))"
                    : "",
            }}
            className={`   rounded-2xl h-20 w-full flex flex-col items-center justify-center px-4 ${
                isActive ? "bg-white" : "bg-white/40"
            } relative`}
        >
            {isBlueDot || isOrangeDot ? (
                <div className="absolute top-2.5 right-[13px]">
                    <div
                        style={{
                            boxShadow: isBlueDot
                                ? "0px 2px 4px 0px rgba(45, 106, 238, 0.6)"
                                : "0px 2px 4px 0px #EAB468",
                        }}
                        className={`w-[6px] h-[6px] rounded-full ${
                            isBlueDot
                                ? "bg-linear-to-b from-[#5C8FF7] to-[#276AEE] border-t border-[#68B0EA]"
                                : "bg-linear-to-b from-[#F7E75C] to-[#CC7B1F] border-t border-[#EAB468]"
                        }`}
                    ></div>
                </div>
            ) : null}
            <div className="text-[#141B34] text-lg">{dayName}</div>
            <div className="text-[#141B34] text-xs pt-1">{value}</div>
        </div>
    );
}
