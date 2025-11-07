import React from 'react'

type Props = {
    title: string;
    description: string;
    isOrangeDot?: boolean;
    isLive?: boolean;
    isVidRequired?: boolean;
    dueDate?: string;
    dueTime?: string;
    isCompleted?: boolean;
}

export default function TaskCard({
    title,
    description,
    isOrangeDot=false,
    isLive=false,
    isVidRequired=false,
    dueDate,
    dueTime,
    isCompleted=false,
}: Props) {
  return (
    <div>TaskCard</div>
  )
}