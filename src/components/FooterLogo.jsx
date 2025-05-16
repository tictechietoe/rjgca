import companyLogo from '../assets/logo/companyLogo.jpg';

const FooterLogo = () => {
  return (
    <div className="flex justify-center my-3 px-5 items-center">
      <a href='/' className="flex flex-col items-center pr-3 pl-1 font-normal text-base bg-white border-r-4 border-custom-secondary border-b-4 border-custom-secondary border-t border-t-custom-primary border-l border-l-custom-primary">
        <img width="60px" src={companyLogo} alt='company logo' className="mr-2"/>
        
        {/* Mobile view - stacked text */}
        <div className="flex flex-col items-center md:hidden">
          <h2 className="text-custom-primary font-semibold text-base">R J GALA &</h2>
          <h2 className="text-custom-secondary font-semibold text-base">ASSOCIATES</h2>
        </div>
        
        {/* Desktop view - single line text */}
        <div className="hidden md:flex md:flex-row md:items-center">
          <h2 className="text-custom-primary font-semibold text-base">R J GALA &</h2>
          <h2 className="text-custom-secondary font-semibold text-base ml-1">ASSOCIATES</h2>
        </div>
      </a>
    </div>
  );
};

export default FooterLogo; 