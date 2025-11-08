import React from 'react'

export default function SecondaryButton({
    children,
    ...props
}: {
    children: React.ReactNode;
}) {
  return (
    <button
            className="px-5 py-3 cursor-pointer rounded-xl bg-[#457FF326] text-[#276AEE] text-xs font-medium"
            {...props}
        >
            {children}
        </button>
  )
}
