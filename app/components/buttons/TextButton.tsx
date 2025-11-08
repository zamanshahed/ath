import React from "react";

type Props = {
    children: React.ReactNode;
    
};

export default function TextButton({ children, ...props }: Props) {
    return (
        <button
            className="cursor-pointer text-[#141B3480] text-xs font-medium"
            {...props}
        >
            {children}
        </button>
    );
}
