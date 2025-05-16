import companyLogo from '../assets/logo/companyLogo.jpg';

const Logo = () => {
  return (
    <div className="flex justify-center items-center w-full my-3 px-5">
      <a href='/' className="flex flex-col [@media(min-width:1100px)]:flex-row items-center text-center pr-3 pl-1 font-normal text-base [@media(min-width:1100px)]:text-lg bg-white border-r-4 border-custom-secondary border-b-4 border-custom-secondary border-t border-t-custom-primary border-l border-l-custom-primary">
        <img width="60px" src={companyLogo} alt='company logo' className="mx-auto [@media(min-width:1100px)]:mr-2"/>
        <div className="flex flex-col [@media(min-width:1100px)]:flex-row items-center">
          <span className="flex flex-row justify-center [@media(min-width:1100px)]:justify-start items-center">
            <h2 className="text-custom-primary font-semibold text-base [@media(min-width:1100px)]:text-lg">R J GALA &</h2>
          </span>
          <h2 className="text-custom-secondary font-semibold text-base [@media(min-width:1100px)]:text-lg [@media(min-width:1100px)]:ml-2">ASSOCIATES</h2>
        </div>
      </a>
    </div>
  );
};

export default Logo;