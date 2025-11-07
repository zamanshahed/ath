import React from "react";
import MiniButton from "../buttons/MiniButton";
import Image from "next/image";

type Props = {
    title: string;
    description: string;
    isOrangeDot?: boolean;
    isLive?: boolean;
    isVidRequired?: boolean;
    dueDate?: string;
    dueTime?: string;
    isCompleted?: boolean;
    actionBtnIcon?: string;
    actionBtnText: string;
    isActive?: boolean;
};

export default function TaskCard({
    title,
    description,
    isOrangeDot = false,
    isLive = false,
    isVidRequired = false,
    dueDate,
    dueTime,
    isCompleted = false,
    actionBtnIcon = "",
    actionBtnText = "",
    isActive = false,
}: Props) {
    return (
        <div className={`${isActive ? "bg-white/40" : ""} p-3 rounded-xl`}>
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex space-x-2">
                        <h2 className="text-sm font-medium">{title}</h2>
                        {isVidRequired ? (
                            <div className="px-3 py-1 rounded-full bg-[#0000001A] text-[8px] font-medium">
                                Video submission required
                            </div>
                        ) : null}
                        {isLive ? (
                            <div className="bg-white rounded-full text-[8px] text-[#FF5252] px-2 py-1 font-medium flex items-center space-x-0.5">
                                <div className="w-1.5 h-1.5 rounded-[1.5px] bg-[#FF5151]" />
                                <div>Live</div>
                            </div>
                        ) : null}
                    </div>

                    <div className="flex items-center space-x-1 pt-1.5">
                        <div
                            className={`w-3 h-3 rounded ${
                                isOrangeDot
                                    ? "bg-linear-to-b from-[#F7E75C] to-[#CC7B1F] border-t border-[#FDE59D]"
                                    : "bg-linear-to-b from-[#5C8FF7] to-[#276AEE] border-t border-[#9DD0FD]"
                            }`}
                        />
                        <p className="text-xs text-[#141B34CC]">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="flex items-center w-[190px] justify-between">
                    {dueDate ? (
                        <div className="flex items-center space-x-1 text-xs text-[#141B34CC]">
                            <Image
                                src="/images/icons/calendar-01.svg"
                                alt="calendar"
                                width={16}
                                height={16}
                            />
                            <div>{dueDate}</div>
                        </div>
                    ) : null}
                    {dueTime ? (
                        <div className="flex items-center space-x-1 text-xs text-[#141B34CC]">
                            <Image
                                src="/images/icons/clock-01.svg"
                                alt="clock"
                                width={16}
                                height={16}
                            />
                            <div>{dueTime}</div>
                        </div>
                    ) : null}
                    {isCompleted ? <div className="flex items-center space-x-1 text-xs text-[#18952D]">
                        <Image
                            src="/images/icons/green-check.svg"
                            alt="green-check"
                            width={16}
                            height={16}
                        />
                        <div>Completed</div>
                        </div> : null}

                    <MiniButton isGrayBtn={!!actionBtnIcon ? false : true}>
                        <div className="flex items-center space-x-1">
                           {actionBtnIcon && <Image
                                src={actionBtnIcon}
                                alt="btn-icon"
                                width={16}
                                height={16}
                            />}
                            <div>{actionBtnText}</div>
                        </div>
                    </MiniButton>
                </div>
            </div>
        </div>
    );
}
