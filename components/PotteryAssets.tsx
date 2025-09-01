import React from 'react';

const Pot1 = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
            <linearGradient id="pot1-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c2a47f" />
                <stop offset="100%" stopColor="#8b6b4f" />
            </linearGradient>
            <linearGradient id="pot1-highlight" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>
        <path d="M20,95 H80 C90,80 90,40 80,30 H20 C10,40 10,80 20,95 Z" fill="url(#pot1-grad)" />
        <path d="M22,30 H78" stroke="#6a4f3a" strokeWidth="4" />
        <path d="M20,30 C15,32 15,25 20,25 H80 C85,25 85,32 80,30" fill="url(#pot1-grad)" />
        <path d="M20,30 C10,40 10,80 20,95" fill="url(#pot1-highlight)" opacity="0.5" />
    </svg>
);

const Pot2 = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
            <linearGradient id="pot2-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e6dace" />
                <stop offset="100%" stopColor="#b3a599" />
            </linearGradient>
        </defs>
        <path d="M30,95 H70 C85,80 85,50 70,35 L60,20 H40 L30,35 C15,50 15,80 30,95 Z" fill="url(#pot2-grad)" />
        <path d="M40,20 H60" stroke="#8c7f73" strokeWidth="4" />
        <path d="M30,35 C15,50 15,80 30,95" fill="rgba(255,255,255,0.4)" />
    </svg>
);

const Pot3 = () => (
     <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
            <linearGradient id="pot3-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9b9b7a" />
                <stop offset="100%" stopColor="#69694a" />
            </linearGradient>
        </defs>
        <path d="M25,95 H75 C80,85 85,60 75,50 C90,40 80,15 70,10 H30 C20,15 10,40 25,50 C15,60 20,85 25,95 Z" fill="url(#pot3-grad)" />
         <path d="M25,50 C15,60 20,85 25,95" fill="rgba(255,255,255,0.3)" />
    </svg>
);


export const PotteryShelfBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
            {/* Top Shelf */}
            <div className="absolute top-[10%] w-full h-4 bg-[#3a220c]"></div>
            <div className="absolute top-[calc(10%+1rem)] w-full flex justify-around px-16">
                <div className="w-16 h-16"><Pot1/></div>
                <div className="w-20 h-20 -mt-2"><Pot2/></div>
                <div className="w-16 h-16"><Pot3/></div>
            </div>

            {/* Bottom Shelf */}
            <div className="absolute bottom-[10%] w-full h-4 bg-[#3a220c]"></div>
            <div className="absolute bottom-[calc(10%+1rem)] w-full flex justify-around px-16">
                <div className="w-20 h-20 -mb-2"><Pot3/></div>
                <div className="w-16 h-16"><Pot1/></div>
                <div className="w-24 h-24 -mb-4"><Pot2/></div>
            </div>
        </div>
    );
};
