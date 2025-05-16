const Quote = ({ icon, iconColor, message }) => {
  return (
    <div className="flex items-center justify-center p-6 sm:p-8 md:p-10 text-bold">
      <div className={`text-${iconColor}`}>
        {icon}
      </div>
      <div className="font-medium text-base sm:text-lg md:text-xl text-custom-primary italic px-4 sm:px-6 md:px-8 max-w-3xl text-center text-bold">
        <span className="text-custom-secondary">"</span>
        {message}
        <span className="text-custom-secondary">"</span>
      </div>
    </div>
  );
};

export default Quote;