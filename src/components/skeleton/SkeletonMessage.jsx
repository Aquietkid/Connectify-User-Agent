import { useRef } from "react";
import React from 'react'

function SkeletonMessage() {
    const alignRight = useRef(Math.random() > 0.5);

    return (
        <div className={`flex items-center gap-2 ${alignRight ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="bg-placeholder animate-pulse rounded-xl m-4 p-4 max-w-md w-60 h-14"></div>
            <div className="flex flex-col items-center gap-1">
                <div className="bg-placeholder animate-pulse w-5 h-5 rounded-full" />
                <div className="bg-placeholder animate-pulse w-3 h-3 rounded-full" />
            </div>
        </div>
    )
}

export default SkeletonMessage
