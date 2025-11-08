import Image from "next/image";

export default function PlayButtonLive() {
    return (
        <div
            className="relative flex items-center justify-center w-[48px] h-[48px] rounded-full border-l border-r border-[#916151]/40 rotate-45"
            style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px) saturate(180%)",
                WebkitBackdropFilter: "blur(10px) saturate(180%)",
                // border: "1px solid rgba(209, 213, 219, 0.3)", 
                // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
        >
            <div
                className="flex items-center justify-center w-12 h-12 rounded-full -rotate-45"
                style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "inset 0 0 10px rgba(91, 61, 51, 0.1)",
                }}
            >
                <Image src="/images/icons/play.svg" alt="Play Button" width={20} height={20} />
            </div>
        </div>
    );5
}
