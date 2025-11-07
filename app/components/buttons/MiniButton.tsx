export default function MiniButton({
    children,
    isGrayBtn = false,
    ...props
}: {
    children: React.ReactNode;
    isGrayBtn?: boolean;
}) {
    return (
        <button
            className={`px-3 py-2 cursor-pointer rounded-full bg-linear-to-b ${isGrayBtn ? "from-[#DDDDDD] to-[#919893] border-t border-[#CACACA]": "from-[#5C8FF7] to-[#276AEE]"} text-white text-xs font-medium`}
            {...props}
        >
            {children}
        </button>
    );
}
