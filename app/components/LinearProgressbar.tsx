
type Props = { value: number };

export default function LinearProgressbar({ value }: Props) {
    return (
        <div>
            <div className="relative w-full h-2 bg-white rounded-full overflow-hidden shadow-sm">
                <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "#C4D4FD" }}
                />

                <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
                    style={{
                        width: `${value ? value : 5}%`,
                        background:
                            "linear-gradient(to right, #7180DF, #2C49FF)",
                    }}
                />
            </div>
        </div>
    );
}
