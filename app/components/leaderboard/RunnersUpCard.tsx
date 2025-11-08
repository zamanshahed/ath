import Image from "next/image";

type Props = {
    userName: string;
    userImage: string;
    userPoints: number;
};

export default function RunnersUpCard({
    userName,
    userImage,
    userPoints,
}: Props) {
    return (
        <div>
            <div className="relative w-full h-full">
                <Image
                    src={userImage}
                    alt="leaderboard"
                    width={126}
                    height={208}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                />
                <div className="absolute left-[220px] bottom-[100px] text-base font-semibold italic text-[#276AEE] z-10 w-[126px] text-center">
                    {userName}
                </div>
            </div>
        </div>
    );
}
