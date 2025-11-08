import Image from "next/image";
import LinearProgressbar from "../LinearProgressbar";
import PlayButton from "../buttons/PlayButton";

export default function VidCard({
    title,
    image,
    progress,
    due,
    isActive = false,
    isOrangeDot = false,
}: {
    title: string;
    image: string;
    progress: number;
    due: string;
    isActive?: boolean;
    isOrangeDot?: boolean;
}) {
    return (
        <div
            style={{
                filter: isActive
                    ? "drop-shadow(0px 4px 15.7px rgba(188, 204, 255, 0.51))"
                    : "",
            }}
            className={`min-w-[265px] p-3 rounded-xl ${
                isActive ? "bg-white" : "bg-white/40"
            }`}
        >
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <PlayButton />
                </div>
                <Image
                    src={image}
                    alt="video-card"
                    width={240}
                    height={135}
                    className="rounded-xl"
                />
            </div>
            <h3 className="text-sm font-medium pb-2.5 pt-5 leading-4">{title}</h3>
            <LinearProgressbar value={progress} />
            <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-2">
                    <div
                        className={`w-3 h-3 rounded ${
                            isOrangeDot ? "bg-linear-to-b from-[#F7E75C] to-[#CC7B1F] border-t border-[#FDE59D]" : "bg-linear-to-b from-[#5C8FF7] to-[#276AEE] border-t border-[#9DD0FD]"
                        }`}
                    />
                    <p className="text-xs text-[#141B34CC]/80">
                        {progress}% Complete
                    </p>
                </div>
                

                <div className="flex items-center space-x-0.5">
                    <Image src="/images/icons/calendar-01.svg" alt="calendar" width={16} height={16} />
                    <p className="text-xs text-[#141B34CC]/80">{due}</p>
                </div>
            </div>
        </div>
    );
}
