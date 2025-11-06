export default function Button({
    children,
    ...props
}: {
    children: React.ReactNode;
}) {
    return (
        <button
            className="px-5 py-3 cursor-pointer rounded-full bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white text-xs font-medium"
            {...props}
        >
            {children}
        </button>
    );
}
