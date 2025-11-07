
export default function PlayButton() {
    return (
        <div
            className="relative flex items-center justify-center w-[30px] h-[30px] rounded-full border-l border-r border-white/40 rotate-45"
            style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px) saturate(180%)",
                WebkitBackdropFilter: "blur(10px) saturate(180%)",
                // border: "1px solid rgba(209, 213, 219, 0.3)", 
                // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
        >
            <div
                className="flex items-center justify-center w-5 h-5 rounded-full -rotate-45"
                style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.5)",
                }}
            >
                <svg
                    className="w-2 h-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 5V19L19 12L8 5Z"
                        fill="rgba(0, 0, 0, 0.6)"
                    />
                </svg>
            </div>
        </div>
    );
}
