import Image from "next/image";

export default function CoachFeedbackCard({
    userName,
    image,
    feedbackMessage,
    timeString,
}: {
    userName: string;
    image: string;
    feedbackMessage: string;
    timeString: string;
}) {
    return (
        <div className={`p-3 rounded-2xl bg-white/40`}>
            <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Image
                        src={image}
                        alt="activity-icon"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-sm font-semibold mb-0.5">
                            {userName}
                        </h2>
                        <p className="text-xs text-[#141B34B2]/70 min-w-max">
                            {timeString}
                        </p>
                    </div>
                </div>
            </div>
            <StarSection />
            </div>
            <p className="text-xs w-full wrap-break-word mt-2">
                {feedbackMessage}
            </p>
        </div>
    );
}


function StarSection() {
    return (
        <div className="flex items-center gap-1">
           {Array.from({ length: 4 }).map((_, index) => (
            <Image
                key={index}
                src={"/images/icons/star-fill.svg"}
                alt="star-icon"
                width={14}
                height={14}
            />
           ))}
           <Image
                src={"/images/icons/star-empty.svg"}
                alt="star-icon"
                width={14}
                height={14}
            />
        </div>
    );
}
    