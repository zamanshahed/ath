"use client";

import React, { useRef } from "react";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollTop = containerRef.current?.scrollTop || 0;
    if (scrollTop === 0) {
      console.log("✅ Scrolled to the top!");
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="overflow-auto h-full w-full"
    >
      {children}
    </div>
  );
}
