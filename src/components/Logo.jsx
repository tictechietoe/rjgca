import companyLogo from '../assets/logo/companyLogo.jpg';

const Logo = () => {
  return (
    <div className="flex items-center">
      <a href='/' className="flex flex-row items-center text-center pr-3 pl-1 font-normal text-base [@media(min-width:1100px)]:text-lg bg-white border-r-4 border-custom-secondary border-b-4 border-custom-secondary border-t border-t-custom-primary border-l border-l-custom-primary">
        <img width="50px" height="50px" src={companyLogo} alt='company logo' className="mr-2"/>
        <div className="flex flex-row items-center">
          <h2 className="text-custom-primary font-semibold text-sm md:text-base [@media(min-width:1100px)]:text-lg whitespace-nowrap">R J GALA &</h2>
          <h2 className="text-custom-secondary font-semibold text-sm md:text-base [@media(min-width:1100px)]:text-lg ml-1 whitespace-nowrap">ASSOCIATES</h2>
        </div>
      </a>
    </div>
  );
};

export default Logo;