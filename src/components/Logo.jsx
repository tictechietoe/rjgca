import companyLogo from '../assets/logo/companyLogo.jpg';

const Logo = () => {
  return (
    <div className="flex justify-center my-3 px-5 items-center">
      <a href='/' className="flex items-center flex pr-3 pl-1 font-normal text-lg bg-white border-r-4 border-r-yellow-400 border-b-4 border-b-yellow-400 border-t-2 border-t-blue-950 border-l-2 border-l-blue-950">
        <img width="60px" src={companyLogo} alt='company logo' className="mr-2"/>
        <h2 className="text-sky-950 font-semibold mr-2">R J GALA &</h2>
        <h2 className="text-yellow-400 font-semibold">ASSOCIATES</h2>
      </a>
    </div>
  );
};

export default Logo;