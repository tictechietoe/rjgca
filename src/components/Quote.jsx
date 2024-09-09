const Quote = ({ icon, iconColor, message }) => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className={ `text-${iconColor}` }>
        { icon }
      </div>
      <icon size={ 50 } className="mx-10 text-yellow-400"/>
      <div className="font-bold text-xl text-blue-950">
        { `- "${message}."` }
      </div>
    </div>
  );
};

export default Quote;