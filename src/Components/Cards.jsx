const Cards = ({ children }) => {
  return (
    <div className='w-full flex flex-col gap-1 p-3 bg-zinc-300 shadow-md shadow-zinc-400 rounded-md md:w-2xs md:p-5 lg:h-48'>
      {children}
    </div>
  );
};

export default Cards;
