import Image from "next/image";
import Button from "../Button";

export default function RecentActivityCard({
    isFeedbackType = false,
    title,
    description,
    timeString,
    isActive = false,
}: {
    isFeedbackType?: boolean;
    title: string;
    description?: string;
    timeString: string;
    isActive?: boolean;
}) {
    return (
        <div className={`flex items-start justify-between p-3 rounded-2xl ${isActive ? "bg-white/40" : ""}`}>
            <div className="flex space-x-3">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Image
                        src={`/images/icons/${
                            isFeedbackType
                                ? "activity-icon-02.svg"
                                : "activity-icon-01.svg"
                        }`}
                        alt="activity-icon"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-sm font-semibold mb-2">{title}</h2>
                        {isFeedbackType ? (
                            <Button>View Feedback</Button>
                        ) : (
                            <p className="text-xs max-w-[270px] w-full wrap-break-word">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <p className="text-[10px] text-[#2C4AFF] min-w-max">{timeString}</p>
        </div>
    );
}
