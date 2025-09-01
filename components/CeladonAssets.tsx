import React from 'react';

const Vase: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
            <linearGradient id="celadon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#d1e0d7', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#a3bba8', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="celadon-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        {children}
    </svg>
);

const vasePath = "M80,10 H120 A5,5,0,0,1,125,15 V20 C155,40 155,140 125,190 H75 C45,140 45,40 75,20 V15 A5,5,0,0,1,80,10 Z";
const cranePattern = (
    <g fill="#f0f5f3" opacity="0.8" transform="translate(10, 25) scale(0.8)">
        <path d="M108.3,81.4c-2.3-1.1-4.7-2-7-2.7c-1.1-0.3-2.2-0.5-3.3-0.8c-0.2,0-0.5-0.1-0.7-0.1c-1.6-0.4-3.1-0.8-4.7-1.3 c-1-0.3-2-0.6-3-1c-1.6-0.6-3.2-1.3-4.7-2.1c-1.1-0.6-2.2-1.2-3.3-1.9c-1.3-0.8-2.6-1.7-3.8-2.6c-0.6-0.5-1.2-1-1.7-1.5 c-1-1.1-2-2.3-2.8-3.6c-0.6-0.9-1.1-1.8-1.5-2.8c-0.4-1-0.7-2.1-0.9-3.1c-0.2-1.2-0.2-2.5-0.1-3.7c0.1-1,0.2-2,0.5-3 c0.3-1,0.6-1.9,1.1-2.8c0.4-0.8,0.9-1.6,1.4-2.3c0.6-0.7,1.2-1.4,1.9-2c0.7-0.6,1.4-1.2,2.2-1.7c1-0.7,2-1.2,3.1-1.7 c1.1-0.5,2.3-0.9,3.5-1.2c1.1-0.3,2.2-0.5,3.3-0.6c1.2-0.1,2.5-0.1,3.7,0c1.2,0.1,2.4,0.3,3.6,0.6c1.1,0.3,2.1,0.6,3.2,1 c1.1,0.4,2.2,0.9,3.2,1.5c1,0.6,2,1.2,2.9,1.9l0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0.6,0.4,1.2,0.9,1.7,1.4c-2.1-0.2-4.1-0.3-6.2-0.5 c-1-0.1-2-0.2-3-0.3c-1.2-0.1-2.4-0.1-3.6,0c-1,0.1-1.9,0.2-2.9,0.4c-0.9,0.2-1.8,0.4-2.7,0.6c-1.2,0.3-2.4,0.7-3.6,1.1 c-1,0.4-2,0.8-2.9,1.3c-1.2,0.6-2.4,1.3-3.5,2.1c-0.9,0.6-1.8,1.3-2.6,2c-0.8,0.7-1.5,1.5-2.2,2.3c-0.6,0.8-1.2,1.6-1.6,2.5 c-0.4,0.9-0.8,1.9-1,2.8c-0.2,1-0.4,2.1-0.4,3.1c0,1,0.1,2.1,0.3,3.1c0.2,1,0.5,2,0.9,2.9c0.4,0.9,0.8,1.8,1.4,2.6 c0.5,0.8,1.1,1.6,1.8,2.3c1.3,1.4,2.9,2.6,4.5,3.6c1,0.6,2,1.2,3,1.6c1,0.4,2,0.8,3,1.1c1,0.3,2,0.5,3.1,0.7c1,0.2,2,0.3,3,0.4 c2,0.2,4,0.3,6,0.3c1,0,2-0.1,3-0.2c0.9-0.1,1.9-0.2,2.8-0.4c0.9-0.2,1.8-0.4,2.7-0.7c0.8-0.3,1.7-0.6,2.5-0.9 c0.8-0.3,1.6-0.7,2.4-1.1c0.8-0.4,1.5-0.8,2.2-1.3c0.7-0.5,1.4-1,2-1.6c-0.2,1.7-0.5,3.4-0.9,5c-0.4,1.6-0.8,3.2-1.4,4.8 c-0.6,1.5-1.3,3-2.1,4.4c-0.8,1.4-1.7,2.8-2.7,4.1c-1,1.3-2.1,2.5-3.3,3.6c-1.2,1.1-2.5,2.1-3.8,3c-1.4,0.9-2.8,1.7-4.3,2.4 c-1.5,0.7-3,1.3-4.6,1.8c-1.6,0.5-3.2,0.9-4.8,1.2c-1.7,0.3-3.3,0.5-5,0.6c-1.7,0.1-3.4,0-5.1-0.2c-1.7-0.2-3.3-0.5-4.9-1 c-1.6-0.5-3.2-1-4.7-1.7c-1.5-0.7-3-1.5-4.3-2.4c-1.4-0.9-2.7-2-3.9-3.2c-1.2-1.2-2.3-2.5-3.3-3.9c-1-1.4-1.9-2.9-2.7-4.5 c-0.8-1.6-1.5-3.2-2.1-4.9c-0.6-1.7-1.1-3.4-1.5-5.2c-0.4-1.8-0.7-3.6-0.9-5.4c-0.2-1.8-0.3-3.6-0.3-5.4c0-1.8,0.1-3.6,0.4-5.4 c0.2-1.8,0.6-3.5,1-5.2c0.4-1.7,1-3.4,1.6-5c0.6-1.6,1.3-3.2,2.2-4.7c0.8-1.5,1.8-2.9,2.8-4.2c1.1-1.3,2.2-2.6,3.5-3.7 c1.3-1.1,2.6-2.1,4.1-3c1.4-0.9,2.9-1.7,4.5-2.4c1.5-0.7,3.1-1.3,4.7-1.8c1.6-0.5,3.2-0.9,4.9-1.2c1.7-0.3,3.4-0.5,5.1-0.6 c1.7-0.1,3.4,0,5.1,0.2c0.2,0,0.5,0.1,0.7,0.1c2.1,0.3,4.1,0.7,6.1,1.2c2,0.5,3.9,1.1,5.7,1.9c1.8,0.8,3.5,1.7,5.1,2.8 c1.6,1.1,3.1,2.3,4.5,3.6c1.3,1.3,2.5,2.8,3.6,4.3c1.1,1.5,2,3.1,2.8,4.8c0.8,1.7,1.4,3.4,2,5.2c-2.3-0.9-4.7-1.6-7-2.1 c-1.2-0.3-2.4-0.5-3.6-0.7c-1.1-0.2-2.3-0.3-3.4-0.4c-1.2-0.1-2.4-0.1-3.6,0c-1.2,0.1-2.4,0.3-3.6,0.6c-1.1,0.3-2.2,0.6-3.3,0.9 c-1.1,0.4-2.2,0.8-3.2,1.3c-1.1,0.5-2.1,1.1-3.1,1.8c-1,0.7-1.9,1.4-2.8,2.2c-0.9,0.8-1.7,1.7-2.5,2.7c-0.7,1-1.4,2-2,3.1 c-0.6,1.1-1.1,2.3-1.5,3.5c-0.4,1.2-0.7,2.4-0.8,3.7c-0.1,1.3,0,2.6,0.1,3.8c0.2,1.2,0.5,2.4,0.9,3.6c0.4,1.2,0.9,2.3,1.5,3.4 c0.6,1.1,1.3,2.2,2.1,3.2c0.8,1,1.7,1.9,2.7,2.8c1,0.9,2,1.7,3.1,2.4c1.1,0.7,2.3,1.4,3.5,2c1.2,0.6,2.4,1.1,3.7,1.5 c1.3,0.4,2.6,0.8,3.9,1.1c1.3,0.3,2.6,0.5,3.9,0.7c1.3,0.2,2.6,0.3,3.9,0.3c1.3,0,2.6-0.1,3.9-0.2c1.3-0.1,2.6-0.3,3.8-0.6 c1.3-0.3,2.5-0.6,3.7-1c1.2-0.4,2.4-0.9,3.6-1.4c1.1-0.5,2.2-1.1,3.3-1.8c1-0.7,2-1.4,2.9-2.2c0.9-0.8,1.8-1.7,2.5-2.6 c0.8-1,1.5-2,2.1-3.1c0.6-1.1,1.1-2.2,1.5-3.4c0.4-1.2,0.7-2.4,0.9-3.7c0.1-1.3,0.2-2.6,0.1-3.9c-0.1-1.3-0.3-2.5-0.6-3.8 c-0.3-1.2-0.7-2.4-1.1-3.6c-0.4-1.2-1-2.3-1.6-3.4c-0.6-1.1-1.3-2.1-2.1-3.1c-0.8-1-1.7-1.9-2.7-2.7c-1-0.9-2.1-1.7-3.2-2.4 c-1.1-0.7-2.3-1.3-3.5-1.9c-1.2-0.6-2.5-1.1-3.7-1.5c-1.3-0.4-2.6-0.8-3.9-1.1c-1.3-0.3-2.6-0.5-4-0.7c-0.6-0.1-1.3-0.2-1.9-0.2 c-0.7,0-1.3,0-2,0.1c-1.4,0.1-2.7,0.3-4.1,0.6c-1.3,0.3-2.6,0.6-3.9,1c-1.3,0.4-2.5,0.9-3.7,1.5c-1.2,0.6-2.4,1.2-3.5,1.9 c-1.1,0.7-2.2,1.5-3.2,2.3c-1,0.8-2,1.7-2.9,2.6c-0.9,1-1.8,2-2.5,3.1c-0.8,1.1-1.5,2.3-2.1,3.5c-0.6,1.2-1.1,2.5-1.5,3.8 c-0.4,1.3-0.7,2.6-0.8,3.9c-0.1,1.3,0,2.7,0.2,4c0.1,1.3,0.4,2.6,0.7,3.9c0.3,1.3,0.8,2.5,1.3,3.7c0.5,1.2,1.1,2.4,1.7,3.5 c0.7,1.1,1.4,2.2,2.2,3.2c0.8,1,1.7,2,2.7,2.8c1,0.9,2,1.7,3.1,2.5c1.1,0.8,2.3,1.5,3.5,2.1c1.2,0.6,2.5,1.2,3.8,1.6 c1.3,0.5,2.6,0.9,3.9,1.2c1.3,0.3,2.7,0.5,4,0.7c1.4,0.2,2.7,0.3,4.1,0.3c1.4,0,2.8-0.1,4.1-0.3c1.4-0.2,2.7-0.5,4-0.8 c1.3-0.3,2.6-0.7,3.9-1.2c1.2-0.5,2.4-1,3.6-1.6c1.2-0.6,2.3-1.3,3.4-2.1c1.1-0.8,2.1-1.6,3.1-2.6c1-0.9,1.9-2,2.7-3.1 c0.8-1.1,1.5-2.2,2.1-3.4c0.6-1.2,1.1-2.5,1.4-3.8c0.4-1.3,0.6-2.6,0.7-4c0.1-1.3,0.1-2.7,0-4c-0.1-1.3-0.3-2.6-0.6-3.9 c-0.3-1.3-0.7-2.5-1.1-3.7c-0.4-1.2-0.9-2.4-1.5-3.5c-0.6-1.1-1.2-2.2-1.9-3.2c-0.7-1-1.5-2-2.3-2.9c-0.8-0.9-1.7-1.7-2.7-2.5 c-1-0.8-2-1.5-3.1-2.2c-1.1-0.7-2.2-1.3-3.4-1.8c-1.2-0.5-2.4-1-3.6-1.4c-1.2-0.4-2.5-0.8-3.7-1.1c-1.3-0.3-2.6-0.6-3.9-0.8 c-1.3-0.2-2.6-0.3-3.9-0.4c-0.6,0-1.3-0.1-1.9-0.1L108.3,81.4z"/>
    </g>
);

const FullVaseBody: React.FC = () => (
    <g>
        <ellipse cx="100" cy="192" rx="30" ry="3" fill="rgba(0,0,0,0.2)" />
        <path d={vasePath} fill="url(#celadon-gradient)" stroke="#4d645a" strokeWidth="1" />
        <path d={vasePath} fill="url(#celadon-highlight)" />
        {cranePattern}
    </g>
);

const piece0Path = "M80,10 H120 A5,5,0,0,1,125,15 V20 H75 V15 A5,5,0,0,1,80,10 Z";
const piece1Path = "M75,20 C45,40 46,70 55,90 L65,85 C56,70 55,40 75,22 Z";
const piece2Path = "M125,190 H95 L100,170 L115,180 Z";

const remainingVasePath = "M125,20 C155,40 155,140 125,190 L115,180 L100,170 L95,190 H75 C45,140 45,40 75,22 L65,85 C56,70 46,70 45,40 C58,30 68,25 75,20 V15 A5,5,0,0,1,80,10 H120 A5,5,0,0,1,125,15 V20 M55,90 C46,70 45,40 75,22";

export const CeladonBroken: React.FC = () => (
  <Vase>
    <defs>
        <clipPath id="broken-mask">
            <path d={remainingVasePath} />
        </clipPath>
    </defs>
    <ellipse cx="100" cy="192" rx="30" ry="3" fill="rgba(0,0,0,0.2)" />
    <g clipPath="url(#broken-mask)">
        <path d={vasePath} fill="url(#celadon-gradient)" stroke="#4d645a" strokeWidth="1" />
        <path d={vasePath} fill="url(#celadon-highlight)" />
        {cranePattern}
    </g>
  </Vase>
);

export const CeladonPiece0: React.FC = () => (
    <Vase><g transform="translate(100, 100) scale(3) translate(-100, -15)"><path d={piece0Path} fill="url(#celadon-gradient)" stroke="#4d645a" strokeWidth="0.5" /></g></Vase>
);
export const CeladonPiece1: React.FC = () => (
    <Vase><g transform="translate(100, 100) scale(2.5) translate(-65, -55)"><path d={piece1Path} fill="url(#celadon-gradient)" stroke="#4d645a" strokeWidth="0.5" /></g></Vase>
);
export const CeladonPiece2: React.FC = () => (
    <Vase><g transform="translate(100, 100) scale(3) translate(-105, -180)"><path d={piece2Path} fill="url(#celadon-gradient)" stroke="#4d645a" strokeWidth="0.5" /></g></Vase>
);


interface CeladonAssemblingProps {
  placedPieces: boolean[];
  isOverTarget: number | null;
  onDrop: (e: React.DragEvent, targetId: number) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragEnter: (e: React.DragEvent, targetId: number) => void;
  onDragLeave: (e: React.DragEvent) => void;
}
export const CeladonAssembling: React.FC<CeladonAssemblingProps> = ({ placedPieces, isOverTarget, onDrop, onDragOver, onDragEnter, onDragLeave }) => {
    
    const Slot: React.FC<{ id: number; path: string; children: React.ReactNode; }> = ({id, path, children}) => (
        <>
            {placedPieces[id] ? (
                children
            ) : (
                <path
                    d={path}
                    fill={isOverTarget === id ? 'rgba(110, 231, 183, 0.4)' : 'rgba(0,0,0,0.3)'}
                    stroke={isOverTarget === id ? '#10b981' : '#fff'}
                    strokeWidth="1"
                    strokeDasharray="3"
                    onDrop={(e) => onDrop(e, id)}
                    onDragOver={onDragOver}
                    onDragEnter={(e) => onDragEnter(e, id)}
                    onDragLeave={onDragLeave}
                    className="cursor-pointer"
                />
            )}
        </>
    );

    return(
        <Vase>
            <defs>
                <clipPath id="assembling-mask">
                    <path d={remainingVasePath} />
                </clipPath>
            </defs>
            <ellipse cx="100" cy="192" rx="30" ry="3" fill="rgba(0,0,0,0.2)" />
            <g clipPath="url(#assembling-mask)">
                 <path d={vasePath} fill="url(#celadon-gradient)" stroke="#4d645a" strokeWidth="1" />
                 <path d={vasePath} fill="url(#celadon-highlight)" />
                 {cranePattern}
            </g>
            <Slot id={0} path={piece0Path}><path d={piece0Path} fill="url(#celadon-gradient)" stroke="#4d645a" strokeWidth="1" /></Slot>
            <Slot id={1} path={piece1Path}><path d={piece1Path} fill="url(#celadon-gradient)" stroke="#4d645a" strokeWidth="1" /></Slot>
            <Slot id={2} path={piece2Path}><path d={piece2Path} fill="url(#celadon-gradient)" stroke="#4d645a" strokeWidth="1" /></Slot>
        </Vase>
    );
};

interface CeladonCrackedProps {
  mendedCracks: boolean[];
  onMend: (id: number) => void;
}
export const CeladonCracked: React.FC<CeladonCrackedProps> = ({ mendedCracks, onMend }) => {
    const Crack: React.FC<{id: number, d: string}> = ({ id, d }) => !mendedCracks[id] ? (
        <path d={d} stroke="rgba(0,0,0,0.6)" strokeWidth="1.5" fill="none" onClick={() => onMend(id)} className="cursor-pointer transition-all hover:stroke-yellow-300" filter="url(#glow)"/>
    ) : null;
    return (
        <Vase>
            <FullVaseBody />
            <Crack id={0} d="M90 40 L95 55 L90 70" />
            <Crack id={1} d="M140 80 L130 95 L140 110" />
            <Crack id={2} d="M75 130 L90 145 L75 160" />
            <Crack id={3} d="M110 160 L100 175 L115 185" />
      </Vase>
    )
};

export const CeladonRestored: React.FC = () => (
    <Vase>
        <FullVaseBody />
    </Vase>
);