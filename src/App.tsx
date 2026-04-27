import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WhiteBalanceIcon, CameraIcon, VideoIcon, UsbIcon, LeftTriangleIcon, RightTriangleIcon, SettingsIcon } from './Icons';

const MODES = [
  "关节镜模式", 
  "膀胱镜模式", 
  "耳鼻喉科/颅骨", 
  "柔性内窥镜", 
  "宫腔镜/腹腔镜", 
  "激光检查", 
  "自定义1", 
  "自定义2"
];
const FLUO_DISPLAY_MODES = [
  { id: 'overlay', label: '叠加模式' },
  { id: 'mono', label: '单色模式' },
  { id: 'intensity', label: '强度模式' },
];

const WaveBackground = () => (
  <div className="absolute inset-0 z-0 bg-[#06040C] overflow-hidden">
    {/* Base dark ambient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#030105] via-[#080512] to-[#120a2b] bg-opacity-90"/>
    
    <div className="absolute top-0 right-0 w-[1400px] h-[1400px] bg-gradient-to-bl from-white/[0.12] via-white/[0.04] to-transparent rounded-full pointer-events-none blur-[140px] translate-x-1/4 -translate-y-1/4 mix-blend-screen" />
    
    {/* Physical SVG wave for the sharp gradient edge seen in the image */}
    <div className="absolute bottom-0 w-full h-[60%] flex items-end">
        <svg className="w-full h-full min-h-[300px]" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            animate={{ d: [
              "M0,350 C400,320 700,500 1000,500 C1200,500 1350,450 1440,400 L1440,600 L0,600 Z",
              "M0,380 C400,350 700,530 1000,530 C1200,530 1350,480 1440,430 L1440,600 L0,600 Z",
              "M0,350 C400,320 700,500 1000,500 C1200,500 1350,450 1440,400 L1440,600 L0,600 Z"
            ]}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#wave-grad-1)" fillOpacity="0.4"
          />
          <motion.path
            animate={{ d: [
              "M0,450 C300,450 600,450 900,520 C1200,580 1350,420 1440,250 L1440,600 L0,600 Z",
              "M0,480 C300,480 600,480 900,550 C1200,600 1350,450 1440,280 L1440,600 L0,600 Z",
              "M0,450 C300,450 600,450 900,520 C1200,580 1350,420 1440,250 L1440,600 L0,600 Z"
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#wave-grad-2)" fillOpacity="0.6"
          />
          <defs>
            <linearGradient id="wave-grad-1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A3482" />
              <stop offset="100%" stopColor="#120a2b" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2c1e5e" />
              <stop offset="100%" stopColor="#080512" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
    </div>
    
    {/* Floating color blocks logic for oceanic deep feel */}
    <motion.div
      animate={{
        x: [0, 30, 0],
        y: [0, -10, 0],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[50%] bg-[#3D257A] blur-[120px] rounded-[100%] mix-blend-screen"
    />
    <motion.div
      animate={{
        x: [0, -20, 0],
        y: [0, 20, 0],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[60%] bg-[#22104F] blur-[100px] rounded-[100%] mix-blend-screen"
    />
  </div>
);

export default function App() {
  const [isFluo, setIsFluo] = useState(false);
  const [modeIdx, setModeIdx] = useState(0);
  const [isModeListOpen, setIsModeListOpen] = useState(false);
  const [is3D, setIs3D] = useState(false);
  
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // Fluorescence states
  const [icg, setIcg] = useState(false);
  const [mb, setMb] = useState(false);
  const [fluoDisplay, setFluoDisplay] = useState('overlay');

  const fluoEnabled = icg || mb;

  const handleNextMode = () => setModeIdx((prev) => (prev + 1) % MODES.length);
  const handlePrevMode = () => setModeIdx((prev) => (prev - 1 + MODES.length) % MODES.length);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden font-sans select-none touch-none">
      <div className="relative w-[1026px] h-[600px] bg-[#0A0713] text-white overflow-hidden shadow-2xl flex">
        
        <WaveBackground />
        
        <div 
          className="absolute top-0 right-0 w-[150px] h-[100px] cursor-pointer z-[100]"
          onClick={() => setIsFluo(!isFluo)}
        />

        {/* Left Sidebar (100x600) */}
        <div className="relative z-10 w-[100px] h-[600px] bg-white/[0.04] backdrop-blur-lg border-r border-white/5 shadow-[20px_0_40px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col gap-[20px] items-center pt-10">
            {/* USB 1 - Active */}
            <div className="flex flex-col items-center gap-[4px]">
              <UsbIcon active />
              <span className="text-sm font-medium tracking-wider text-white">12h</span>
            </div>
            {/* USB 2 - Inactive */}
            <div className="flex flex-col items-center gap-[4px]">
              <UsbIcon active={false} />
            </div>
          </div>

          <div className="absolute bottom-[40px] w-full flex flex-col items-center gap-[70px]">
            <span className="text-[26px] font-bold tracking-tighter text-white/80 hover:text-white transition-colors cursor-pointer" style={{fontFamily: "Arial, sans-serif"}}>
              OSD
            </span>
            <button className="text-white/80 hover:text-white transition-colors active:scale-90">
              <SettingsIcon />
            </button>
          </div>
        </div>

        {/* Main Content Area (926x600) */}
        <div className="relative z-10 w-[926px] h-[600px] flex flex-col items-center">

          {/* Top Panel */}
          <div className="w-full flex items-center justify-center relative mt-[36px] px-[40px]">
             {/* 3D/2D Toggle */}
             <div className="absolute left-[80px] flex flex-col items-center justify-center cursor-pointer group" onClick={() => setIs3D(!is3D)}>
               <span className="text-[32px] font-bold tracking-widest drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] group-active:scale-95 transition-transform">
                 {is3D ? "3D" : "2D"}
               </span>
              <div className="w-[50px] h-1.5 mt-2 rounded-[100%] bg-white/30 shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
              <div className="w-[70px] h-1 mt-1 rounded-[100%] border border-white/10" />
            </div>

            {/* Mode Switcher Area (500x80) */}
            <div className="relative">
              <div className="w-[500px] h-[80px] bg-[#1f1a30]/70 backdrop-blur-3xl rounded-[40px] border border-white/10 flex items-center px-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <button onClick={handlePrevMode} className="p-4 text-white/50 hover:text-white transition-colors active:scale-90">
                  <LeftTriangleIcon />
                </button>
                
                <div className="flex-1 flex flex-col justify-center items-center h-full relative cursor-pointer group" onClick={() => setIsModeListOpen(!isModeListOpen)}>
                  <span className="text-2xl font-medium tracking-widest text-white group-active:scale-95 transition-transform mt-[-4px]">
                    {MODES[modeIdx]}
                  </span>
                  {/* Dots Indicator placed perfectly below the text within the 80px height */}
                  <div className="absolute bottom-2 flex justify-center gap-2">
                    {MODES.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === modeIdx ? "w-6 bg-[#8B80F9] shadow-[0_0_12px_rgba(139,128,249,0.8)]" : "w-1.5 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button onClick={handleNextMode} className="p-4 text-white/50 hover:text-white transition-colors active:scale-90">
                  <RightTriangleIcon />
                </button>
              </div>

              {/* Dropdown Options */}
              <AnimatePresence>
                {isModeListOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[340px] bg-[#1a142c]/95 backdrop-blur-3xl border border-white/10 rounded-[24px] p-3 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  >
                    {MODES.map((mode, i) => (
                      <button
                        key={i}
                        className={`w-full text-center py-4 rounded-xl transition-colors ${
                          i === modeIdx ? "bg-white/10 text-white font-bold" : "text-white/60 hover:bg-white/5"
                        }`}
                        onClick={() => {
                          setModeIdx(i);
                          setIsModeListOpen(false);
                        }}
                      >
                        <span className="text-xl tracking-widest">{mode}</span>
                        {i === modeIdx && <div className="text-sm text-[#8B80F9] mt-1">当前 (第 {i + 1} 项)</div>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Buttons Container */}
          <div className="flex gap-[40px] mt-[40px] transition-all duration-500 will-change-transform z-20">
            <ActionButton isFluo={isFluo} icon={<WhiteBalanceIcon expanded={!isFluo} />} label="白平衡" />
            <ActionButton isFluo={isFluo} icon={<CameraIcon expanded={!isFluo} />} label="拍照" />
            <ActionButton 
              isFluo={isFluo} 
              icon={<VideoIcon expanded={!isFluo} />} 
              label="录像" 
              isRecording={isRecording}
              recordingTime={recordingTime}
              onClick={() => setIsRecording(!isRecording)}
            />
          </div>

          {/* Fluo Control Module (770x120) */}
          <AnimatePresence>
            {isFluo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="w-[774px] h-[124px] mt-[40px] rounded-[22px] p-[2px] bg-gradient-to-b from-[#a1a7c4]/[0.45] to-[#a1a7c4]/[0.30] shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              >
                <div className="w-full h-full bg-[#120a2b]/40 backdrop-blur-[2px] rounded-[20px] flex items-center px-10 relative overflow-hidden">
                {/* ICG/MB Controls */}
                <div className="flex gap-[48px]">
                  <motion.button
                    whileTap={{ scale: 0.92, borderColor: "rgba(255, 255, 255, 0.5)" }}
                    className={`w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold tracking-wider text-[26px] transition-all duration-300 border ${
                      icg 
                        ? "text-white border-transparent shadow-[0_0_20px_rgba(122,70,255,0.5)]" 
                        : "bg-white/5 border-white/10 text-white/50"
                    }`}
                    style={icg ? { backgroundImage: "linear-gradient(135deg, #7079FF, #7A46FF)" } : {}}
                    onClick={() => setIcg(!icg)}
                  >
                    ICG
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.92, borderColor: "rgba(255, 255, 255, 0.5)" }}
                    className={`w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold tracking-wider text-[26px] transition-all duration-300 border ${
                      mb 
                        ? "text-white border-transparent shadow-[0_0_20px_rgba(122,70,255,0.5)]" 
                        : "bg-white/5 border-white/10 text-white/50"
                    }`}
                    style={mb ? { backgroundImage: "linear-gradient(135deg, #7079FF, #7A46FF)" } : {}}
                    onClick={() => setMb(!mb)}
                  >
                    MB
                  </motion.button>
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-[70px] bg-white/10 mx-12" />

                {/* Display Modes */}
                <div className="flex gap-[16px] flex-1 justify-end pr-0">
                  {FLUO_DISPLAY_MODES.map((mode) => (
                     <button
                      key={mode.id}
                      disabled={!fluoEnabled}
                      onClick={() => setFluoDisplay(mode.id)}
                      className={`h-[60px] px-6 rounded-[20px] flex items-center justify-center text-[18px] whitespace-nowrap font-medium tracking-widest transition-all duration-300 border-2 ${
                        fluoEnabled 
                          ? fluoDisplay === mode.id
                            ? "text-white border-transparent shadow-[0_0_20px_rgba(122,70,255,0.5)] cursor-pointer"
                            : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white cursor-pointer"
                          : "bg-white/5 border-white/5 text-white/30 cursor-not-allowed"
                      }`}
                      style={fluoEnabled && fluoDisplay === mode.id ? { backgroundImage: "linear-gradient(135deg, #7079FF, #7A46FF)" } : {}}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}

// Reusable Action Button (230x310 normal, 230x190 fluo)
function ActionButton({ 
  icon, 
  label, 
  isFluo, 
  onClick, 
  isRecording, 
  recordingTime 
}: { 
  icon: React.ReactNode, 
  label: string, 
  isFluo: boolean,
  onClick?: () => void,
  isRecording?: boolean,
  recordingTime?: number
}) {
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.button
      whileTap={{ scale: 0.94, transition: { duration: 0 } }}
      onClick={onClick}
      className={`relative group p-[2px] rounded-[22px] bg-gradient-to-b from-[#a1a7c4]/[0.45] to-[#a1a7c4]/[0.30] shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300
        ${isFluo ? 'h-[194px] w-[234px]' : 'h-[314px] w-[234px]'}
      `}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#120a2b]/40 backdrop-blur-[2px] rounded-[20px] overflow-hidden">
      {/* Click gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B1055] to-[#140833] opacity-0 group-active:opacity-100 z-0" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full h-full justify-center">
        {/* Icon Container */}
        <div className={`transition-all duration-300 relative flex justify-center items-center ${isFluo ? 'mb-4' : 'mb-12'} ${isRecording ? 'mb-4' : ''}`}>
          <div className="relative z-10">
            {isRecording ? (
               <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_4px_10px_rgba(211,16,16,0.3)]">
                 <circle cx="30" cy="30" r="26" stroke="#FFFFFF" strokeWidth="4"/>
                 <rect x="20" y="20" width="20" height="20" rx="3" fill="#D31010"/>
               </svg>
            ) : icon}
            {/* Overlay on icon for active state (add 2% white) */}
            <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-[0.02] rounded-full pointer-events-none mix-blend-screen" />
          </div>
        </div>
        
        {isRecording && recordingTime !== undefined ? (
          <div className="flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            <motion.div 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 1, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-red-500"
            />
            <span className="text-[22px] font-medium tracking-widest text-[#F0F0FF]">
              {formatTime(recordingTime)}
            </span>
          </div>
        ) : (
          <span className="text-[22px] font-medium tracking-widest text-[#F0F0FF] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            {label}
          </span>
        )}
      </div>

      {/* Liquid glass style highlight effect */}
      <div className="absolute top-0 left-[-50%] w-[200%] h-[30%] bg-gradient-to-b from-white/[0.08] to-transparent rounded-[50%] blur-md pointer-events-none z-20 group-active:opacity-30" />
      </div>
    </motion.button>
  );
}

