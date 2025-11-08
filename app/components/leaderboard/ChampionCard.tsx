import Image from "next/image";

type Props = {
    userName: string;
    userImage: string;
    userPoints: number;
};

export default function ChampionCard({
    userName,
    userImage,
    userPoints,
}: Props) {
    return (
        <div className="">
            <Image
                src={"/images/lead/L-01.svg"}
                alt="leaderboard"
                width={160}
                height={300}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
            />
            <Image
                src={userImage}
                alt="leaderboard"
                width={89}
                height={100}
                className="fixed left-[240px] top-[120px] rounded-sm"
            />
            <Image
                src={"/images/lead/L1.svg"}
                alt="leaderboard"
                width={37}
                height={54}
                className="fixed left-[310px] top-[100px] rounded-sm"
            />
            <div className="fixed left-[241px] bottom-[147px] text-sm font-bold text-white z-10 w-[86px] text-center">
                {userPoints}
            </div>
            <div className="fixed left-[240px] bottom-[100px] text-sm font-semibold italic text-[#276AEE] z-10 w-[86px] text-center">
                {userName}
            </div>
        </div>
    );
}
