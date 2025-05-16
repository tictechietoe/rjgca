import PingCircle from "./PingCircle";

const DividedContainer = ({ questionColor, questionText, questionSide, answerContent }) => {
  const questionDiv = (
    <div className={ `rounded bg-${questionColor} text-white font-bold px-2 py-1` }>
      { questionText }
    </div>
  );
  const answerDiv = (
    <div className="rounded shadow-xl border-2 p-5 m-5">
      { answerContent }
    </div>
  );
  const leftDiv = questionSide === 'left' ? questionDiv : answerDiv;
  const rightDiv = questionSide === 'left' ? answerDiv : questionDiv;

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="border-r-0 md:border-r-8 border-dashed md:basis-1/2">
        <div className="flex items-center md:mr-5 py-3 md:py-5 justify-end">
          { leftDiv }
        </div>
      </div>
      <div className="w-0 py-4 md:py-7">
        <PingCircle color={ questionColor } />
      </div>
      <div className="border-l-0 md:border-l-8 border-dashed md:basis-1/2">
        <div className="flex items-center md:ml-5 py-3 md:py-5 justify-start">
          { rightDiv }
        </div>
      </div>
    </div>
  );
};

export default DividedContainer;