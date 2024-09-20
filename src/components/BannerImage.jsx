import { ImArrowRight2 } from "react-icons/im";
import { Link } from 'react-router-dom';

const BannerImage = ({ image, title, fromText, fromLink, toText, }) => {

  return (
    <div className="pb-10">
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={ image }
          alt="Background"
          className="absolute w-full h-full object-cover"
        />
        
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-white opacity-20"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-4">
          <div className="border-b-2 border-dashed text-2xl pb-2 font-medium">R J Gala & Associates</div>
          <h2 className="text-3xl hover:text-custom-secondary text-5xl text-custom-secondary font-extrabold my-5">{ title }</h2>
          <div className="flex items-center justify-between">
            <Link className="text-lg text-center hover:text-custom-secondary p-1 hover:cursor-pointer" to={ fromLink }>
              { fromText }
            </Link>
            <ImArrowRight2 size={20} />
            <div className="text-lg text-center hover:text-custom-secondary p-1">{ toText }</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;