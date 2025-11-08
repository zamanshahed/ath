export default function Button({
    children,
    isFullRound = true,
    ...props
}: {
    children: React.ReactNode;
    isFullRound?: boolean;
}) {
    return (
        <button
            className={`px-5 py-3 cursor-pointer bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white text-xs font-medium ${isFullRound ? "rounded-full" : "rounded-xl"}`}
            {...props}
        >
            {children}
        </button>
    );
}
