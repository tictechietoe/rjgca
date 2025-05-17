import { ImArrowRight2 } from "react-icons/im";
import { Link } from 'react-router-dom';

const BannerImage = ({ image, title, fromText, fromLink, toText, }) => {

  return (
    <div className="pb-6 sm:pb-10">
      <div className="relative h-56 sm:h-80 md:h-96 w-full overflow-hidden">
        <img
          src={ image }
          alt="Background"
          className="absolute w-full h-full object-cover"
        />
        
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-white opacity-20"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-2 sm:p-4">
          <div className="border-b-2 border-dashed text-lg sm:text-2xl pb-2 font-medium">R J Gala & Associates</div>
          <h2 className="text-xl text-center sm:text-3xl md:text-5xl hover:text-custom-secondary text-custom-secondary font-extrabold my-3 sm:my-5">{ title }</h2>
<div className="flex flex-row items-center justify-center gap-1 sm:gap-4 text-center">
  <Link className="text-base sm:text-lg hover:text-custom-secondary p-1 hover:cursor-pointer" to={ fromLink }>
    { fromText }
  </Link>
  <ImArrowRight2 size={16} className="mx-1 sm:mx-0" />
  <div className="text-base sm:text-lg hover:text-custom-secondary p-1">{ toText }</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
