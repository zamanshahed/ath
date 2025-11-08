export default function LiveButton({
    children,
    ...props
}: {
    children: React.ReactNode;
}) {
    return (
        <button
            className="px-5 py-3 cursor-pointer rounded-xl bg-linear-to-b from-[#FF6565] to-[#EC4213] text-white text-xs font-medium"
            {...props}
        >
            {children}
        </button>
    );
}
