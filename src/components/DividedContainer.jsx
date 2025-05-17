import PingCircle from "./PingCircle";

const DividedContainer = ({ questionColor, questionText, questionSide, answerContent }) => {
  // Desktop title
  const titleDiv = (
    <div className="flex items-center">
      <div className={`rounded bg-${questionColor} text-white font-bold px-2 py-1 z-10 relative text-center`}>
        {questionText}
      </div>
    </div>
  );
  
  // Content is always the answer content
  const contentDiv = (
    <div className="rounded shadow-xl border-2 p-5 m-5 z-20 relative bg-white">
      {answerContent}
    </div>
  );
  
  // Position the title and content based on questionSide for desktop
  const leftDiv = questionSide === 'left' ? (
    <div className="hidden md:block">{titleDiv}</div>
  ) : contentDiv;
  
  const rightDiv = questionSide === 'left' ? contentDiv : (
    <div className="hidden md:block">{titleDiv}</div>
  );

  return (
    <div className="w-full">
      {/* Desktop layout with z-index hierarchy */}
      <div className="hidden md:flex flex-row relative">
        {/* Dotted borders for desktop - lowest z-index */}
        <div className="absolute inset-0 flex" style={{ zIndex: 1 }}>
          <div className="w-1/2 border-r-8 border-dashed border-gray-300"></div>
          <div className="w-1/2 border-l-8 border-dashed border-gray-300"></div>
        </div>
        
        <div className="basis-1/2 z-10 relative">
          <div className="flex items-center mr-5 py-5 justify-end">
            {leftDiv}
          </div>
        </div>
        
        {/* Center blinker for desktop - higher z-index */}
        <div className="w-0 py-7 flex justify-center items-center relative" style={{ zIndex: 30 }}>
          <PingCircle color={questionColor} position="center" />
        </div>
        
        <div className="basis-1/2 z-10 relative">
          <div className="flex items-center ml-5 py-5 justify-start">
            {rightDiv}
          </div>
        </div>
      </div>

      {/* Mobile layout with z-index hierarchy */}
      <div className="md:hidden w-full relative py-4 px-3">
        {/* Central dotted line for mobile - lowest z-index */}
        <div className="absolute inset-y-0 left-1/2 border-r-8 border-dashed border-gray-300 -translate-x-1/2 h-full" style={{ zIndex: 1 }}></div>
        
        {/* Center blinker for mobile - higher z-index */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2" style={{ zIndex: 30 }}>
          <PingCircle color={questionColor} position="center" />
        </div>
        
        {/* Two column layout for mobile with titles - even higher z-index */}
        <div className="flex mb-6 relative">
          {/* Left side (45% width) */}
          <div className="w-[45%] pr-3 flex justify-end items-center z-10 relative">
            {questionSide === 'left' && (
              <div className="z-20 relative max-w-[95%] mx-2">
                <div className={`rounded bg-${questionColor} text-white font-bold px-3 py-1.5 text-center shadow-md`}>
                  {questionText}
                </div>
              </div>
            )}
          </div>
          
          {/* Center spacing for blinker (10% width) */}
          <div className="w-[10%]"></div>
          
          {/* Right side (45% width) */}
          <div className="w-[45%] pl-3 flex justify-start items-center z-10 relative">
            {questionSide === 'right' && (
              <div className="z-20 relative max-w-[95%] mx-2">
                <div className={`rounded bg-${questionColor} text-white font-bold px-3 py-1.5 text-center shadow-md`}>
                  {questionText}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Content for mobile - highest z-index */}
        <div className="flex justify-center z-20 relative">
          {contentDiv}
        </div>
      </div>
    </div>
  );
};

export default DividedContainer;