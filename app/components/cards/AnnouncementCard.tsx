import Image from "next/image";
import React from "react";
import PlayButtonLive from "../buttons/PlayButtonLive";
import LiveButton from "../buttons/LiveButton";
import SecondaryButton from "../buttons/SecondaryButton";
import TextButton from "../buttons/TextButton";
import Button from "../buttons/Button";

type Props = {
    name: string;
    userName: string;
    userImage: string;
    announcementTitle: string;
    description: string | React.ReactNode;
    timeStamp: string;
    image: string;
    isLive?: boolean;
    likeCount?: number;
    replyCount?: number;
    withAction?: boolean;
    withMapMarker?: boolean;
};

export default function AnnouncementCard({
    name,
    userName,
    userImage,
    announcementTitle,
    description,
    timeStamp,
    image,
    isLive = false,
    likeCount = 0,
    replyCount = 0,
    withAction = false,
    withMapMarker = false,
}: Props) {
    return (
        <div className="bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <Image
                    src={userImage}
                    alt={userName}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div className="space-y-0.5">
                    <div className="flex space-x-1">
                        <h3 className="font-bold">{name}</h3>
                        <p className="font-medium text-[#536471]">{userName}</p>
                    </div>
                    <p className="text-[#141B3499] text-xs">{timeStamp}</p>
                </div>
            </div>
            {withAction && (
                <div className="flex items-center space-x-2">
                    <TextButton>
                        <Image src="/images/icons/share-03.svg" alt="Join Live" width={24} height={24} />                        
                    </TextButton>
                    <TextButton>
                        <Image src="/images/icons/more-vertical.svg" alt="Join Live" width={24} height={24} />                        
                    </TextButton>
                </div>
            )}
            </div>

            <div className="pt-4 pb-2">
                <div className="font-bold pb-2 text-xl">
                    {announcementTitle}
                </div>
                <div className="text-sm">{description}</div>
            </div>
            <div className="relative min-h-[220px]">
                <Image
                    src={image}
                    alt={announcementTitle}
                    fill
                    className="rounded-xl object-cover"
                />
                {isLive && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <PlayButtonLive />
                    </div>
                )}
                {withMapMarker && (
                    <div className="absolute top-[90px] left-[180px]">
                        <Image src="/images/icons/map-marker.svg" alt="Join Live" width={30} height={40} />
                    </div>
                )}
            </div>

            <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    {isLive ? <LiveButton>
                        <div className="flex items-center space-x-2">
                            <Image src="/images/icons/play-circle.svg" alt="Join Live" width={20} height={20} />
                            <div>Join Live</div>
                        </div>
                        </LiveButton>:
                    <Button isFullRound={false}>
                        View Details
                    </Button>    
                    }

                    <SecondaryButton>
                        <div className="flex items-center space-x-2">
                            <Image src="/images/icons/task-edit-02.svg" alt="Join Live" width={20} height={20} />
                            <div>RSVP to Practice</div>
                        </div>
                    </SecondaryButton>
                </div>
                <div className="flex items-center space-x-[55px]">
                    <TextButton>
                        <div className="flex items-center space-x-2">
                            <Image src="/images/icons/like.svg" alt="Join Live" width={20} height={20} />
                            <div>{likeCount} Likes</div>
                        </div>
                    </TextButton>
                    <TextButton>
                        <div className="flex items-center space-x-2">
                            <Image src="/images/icons/comment.svg" alt="Join Live" width={20} height={20} />
                            <div>{replyCount} Replies</div>
                        </div>
                    </TextButton>
                </div>
            </div>
        </div>
    );
}
