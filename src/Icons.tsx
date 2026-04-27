export const WhiteBalanceIcon = ({ expanded = true }: { expanded?: boolean }) => (
  <svg width={expanded ? "105" : "70"} height={expanded ? "90" : "60"} viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-500">
    <defs>
      <linearGradient id="wb-top" x1="35" y1="0" x2="35" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5F6FF" />
        <stop offset="1" stopColor="#BCC3F4" />
      </linearGradient>
      <linearGradient id="wb-trim" x1="35" y1="36" x2="35" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C4CAFA" />
        <stop offset="1" stopColor="#8A92D8" />
      </linearGradient>
    </defs>
    
    <g transform="translate(-1, 0)">
      {/* Top Unit */}
      <path d="M 12 8 C 12 4 16 2 20 1 C 30 -1 42 -1 52 1 C 56 2 60 4 60 8 L 60 28 C 60 32 56 34 52 35 C 42 37 30 37 20 35 C 16 34 12 32 12 28 Z" fill="url(#wb-top)" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      
      {/* Left Triangle */}
      <path d="M 5 36 L 5 53 C 5 55 6 56 8 56 L 28 56 C 30 56 31 54 29 52 L 9 34 C 7 32 5 33 5 36 Z" fill="#4B31BB" stroke="url(#wb-trim)" strokeWidth="4" strokeLinejoin="round" />
      <path d="M 5 36 L 5 53 C 5 55 6 56 8 56 L 28 56 C 30 56 31 54 29 52 L 9 34 C 7 32 5 33 5 36 Z" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" strokeLinejoin="round" />
      
      {/* Right Triangle */}
      <path d="M 67 36 L 67 53 C 67 55 66 56 64 56 L 44 56 C 42 56 41 54 43 52 L 63 34 C 65 32 67 33 67 36 Z" fill="#4B31BB" stroke="url(#wb-trim)" strokeWidth="4" strokeLinejoin="round" />
      <path d="M 67 36 L 67 53 C 67 55 66 56 64 56 L 44 56 C 42 56 41 54 43 52 L 63 34 C 65 32 67 33 67 36 Z" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" strokeLinejoin="round" />
    </g>
  </svg>
);

export const CameraIcon = ({ expanded = true }: { expanded?: boolean }) => (
  <svg width={expanded ? "105" : "70"} height={expanded ? "90" : "60"} viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-500">
    <defs>
      <linearGradient id="cam-body" x1="35" y1="15" x2="35" y2="55" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5F6FF" />
        <stop offset="1" stopColor="#BCC3F4" />
      </linearGradient>
      <linearGradient id="cam-lens" x1="35" y1="20" x2="35" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4A418E" />
        <stop offset="1" stopColor="#2A245C" />
      </linearGradient>
    </defs>
    
    <rect x="5" y="15" width="60" height="40" rx="8" fill="url(#cam-body)" stroke="#FFFFFF" strokeWidth="1.5"/>
    <path d="M 15 15 L 15 10 C 15 8 17 8 19 8 L 27 8 C 29 8 31 10 31 12 L 33 15 Z" fill="url(#cam-body)" />
    <circle cx="35" cy="35" r="16" fill="url(#cam-lens)" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="35" cy="35" r="10" fill="#15122B" />
    <circle cx="38" cy="32" r="3" fill="#FFFFFF" fillOpacity="0.8" />
  </svg>
);

export const VideoIcon = ({ expanded = true }: { expanded?: boolean }) => (
  <svg width={expanded ? "117" : "78"} height={expanded ? "90" : "60"} viewBox="0 0 78 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-500">
    <defs>
      <linearGradient id="vid-body" x1="28" y1="5" x2="28" y2="55" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5F6FF" />
        <stop offset="1" stopColor="#BCC3F4" />
      </linearGradient>
      <linearGradient id="vid-lens" x1="68" y1="20" x2="68" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DFE3FC" />
        <stop offset="1" stopColor="#9FA7E5" />
      </linearGradient>
      <linearGradient id="vid-screen" x1="28" y1="20" x2="28" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3A306E" />
        <stop offset="1" stopColor="#1E1740" />
      </linearGradient>
    </defs>
    
    <rect x="4" y="6" width="50" height="48" rx="8" fill="url(#vid-body)" stroke="#FFFFFF" strokeWidth="1.5"/>
    <path d="M 54 22 C 54 22 68 14 74 14 C 75.1 14 76 14.9 76 16 L 76 44 C 76 45.1 75.1 46 74 46 C 68 46 54 38 54 38 Z" fill="url(#vid-lens)" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="12" y="20" width="32" height="20" rx="4" fill="url(#vid-screen)" stroke="#5B66B5" strokeWidth="1"/>
    
    <circle cx="18" cy="30" r="3" fill="#EAEFFF" />
    <circle cx="18" cy="30" r="1.5" fill="#FFFFFF" />
    
    <circle cx="28" cy="30" r="2.5" fill="#D31010" />
    <circle cx="36" cy="30" r="2" fill="#13B44B" />
  </svg>
);

export const RecordingIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_4px_10px_rgba(211,16,16,0.3)]">
    <circle cx="30" cy="30" r="26" stroke="#FFFFFF" strokeWidth="4"/>
    <rect x="20" y="20" width="20" height="20" rx="3" fill="#D31010"/>
  </svg>
);

export const UsbIcon = ({ active }: { active?: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-all duration-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] ${active ? "opacity-100" : "opacity-30"}`}>
    {/* Connector (metal part on right) */}
    <path d="M 42 12 L 53 12 C 54.65 12 56 13.35 56 15 L 56 25 C 56 26.65 54.65 28 53 28 L 42 28 Z" fill="url(#usb-conn)" />
    
    {/* Connector Holes */}
    <rect x="47" y="15" width="4" height="3" rx="0.5" fill="#111" />
    <rect x="47" y="22" width="4" height="3" rx="0.5" fill="#111" />
    
    {/* Main Body (white part) */}
    <path d="M 20 4 L 41 4 C 43.2 4 45 5.8 45 8 L 45 32 C 45 34.2 43.2 36 41 36 L 20 36 C 11.16 36 4 28.84 4 20 C 4 11.16 11.16 4 20 4 Z" fill={active ? "#FFFFFF" : "#d0d0d0"} />
    
    {/* USB Symbol Lines */}
    <path d="M 14 20 L 33 20" stroke="#000" strokeWidth="2.5" />
    <path d="M 18 20 L 23 27 L 27 27" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M 23 20 L 28 13 L 32 13" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
    
    {/* End nodes */}
    <circle cx="13" cy="20" r="4" fill="#000" /> {/* Base Circle */}
    <circle cx="32" cy="13" r="3" fill="#000" /> {/* Top branch Circle */}
    <rect x="25" y="25" width="4" height="4" fill="#000" /> {/* Bottom branch Square */}
    <path d="M 32 16 L 32 24 L 39 20 Z" fill="#000" /> {/* Middle arrow */}
    
    <defs>
      <linearGradient id="usb-conn" x1="42" y1="12" x2="56" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5F5F5" />
        <stop offset="0.5" stopColor="#B0B0B0" />
        <stop offset="1" stopColor="#707070" />
      </linearGradient>
    </defs>
  </svg>
);

export const LeftTriangleIcon = () => (
  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0L0 10L14 20V0Z" fill="currentColor"/>
  </svg>
);

export const RightTriangleIcon = () => (
  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 20L14 10L0 0V20Z" fill="currentColor"/>
  </svg>
);

export const SettingsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white transition-colors">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
  </svg>
);

