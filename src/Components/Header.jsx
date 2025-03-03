import React from "react";

const Header = ({ children }) => {
  return (
    <header className='w-full h-12 flex justify-between items-center px-2 md:px-10 lg:px-16 xl:px-20 xl:max-w-[1366px]'>
      {children}
    </header>
  );
};

export default Header;
