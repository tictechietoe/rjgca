import companyLogo from '../assets/logo/companyLogo.jpg';

const Logo = () => {
  return (
    <div className="flex justify-center my-3 px-5 items-center">
      <a href='/' className="flex items-center flex pr-3 pl-1 font-normal text-lg bg-white border-r-4 border-custom-secondary border-b-4 border-custom-secondary border-t border-t-custom-primary border-l border-l-custom-primary">
        <img width="60px" src={companyLogo} alt='company logo' className="mr-2"/>
        <h2 className="text-custom-primary font-semibold mr-2">R J GALA &</h2>
        <h2 className="text-custom-secondary font-semibold">ASSOCIATES</h2>
      </a>
    </div>
  );
};

export default Logo;