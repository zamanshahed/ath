import React from 'react';

interface RoundCardProps {
  icon: React.ReactNode;
  unreadCount?: number;
}

const RoundCard: React.FC<RoundCardProps> = ({ icon, unreadCount }) => {
  return (
    <div className="relative w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border-l border-r rotate-45 border-white/50 flex items-center justify-center">
      <div className="relative -rotate-45">
        {icon}
        
        {unreadCount !== undefined && unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF0033] rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] leading-0 font-medium">
              {unreadCount > 99 ? '99+' : unreadCount}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoundCard;