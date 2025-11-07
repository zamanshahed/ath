import React from "react";
import GlassCard from "../cards/GlassCard";
import Button from "../buttons/Button";

export default function TaskSection() {
    const tasks = [
        {
            dayName: "Sun",
            value: "3/11",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: false,
        },
        {
            dayName: "Mon",
            value: "3/12",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: false,
        },
        {
            dayName: "Tue",
            value: "3/13",
            isActive: true,
            isOrangeDot: false,
            isBlueDot: false,
        },
        {
            dayName: "Wed",
            value: "3/14",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: false,
        },
        {
            dayName: "Thu",
            value: "3/15",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: true,
        },
        {
            dayName: "Fri",
            value: "3/16",
            isActive: false,
            isOrangeDot: true,
            isBlueDot: false,
        },
        {
            dayName: "Sat",
            value: "3/17",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: false,
        },
    ];
    return (
        <div>
            <GlassCard>
                <div className="flex items-center justify-between">
                    <div>Today's Tasks</div>
                    <Button>View Entire Schedule</Button>
                </div>

                <div className="flex items-center justify-between space-x-2 pt-4">
                    {tasks.map((task, index) => (
                        <DateCard
                            key={index}
                            dayName={task.dayName}
                            value={task.value}
                            isActive={task.isActive}
                            isOrangeDot={task.isOrangeDot}
                            isBlueDot={task.isBlueDot}
                        />
                    ))}
                </div>
            </GlassCard>
        </div>
    );
}

function DateCard({
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
