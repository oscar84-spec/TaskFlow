import { Link } from "react-router-dom";
import BoardIcon from "../assets/icons/BoardIcon";
import AddIcon from "../assets/icons/AddIcon";
import Notification from "../assets/icons/Notification";
import IconUser from "../assets/icons/IconUser";
import { useState } from "react";
import MenuUser from "./MenuUser";

const HeaderDash = ({ user, clase }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`relative border w-full h-12 flex justify-between items-center px-2 md:px-10 lg:px-16 xl:px-20 ${clase}`}
    >
      <div className='flex gap-5 md:gap-20'>
        <div>
          <Link to='/dashboard' className='flex gap-2 items-center'>
            <i>
              <BoardIcon />
            </i>
            <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>
              TaskFlow
            </h2>
          </Link>
        </div>
        <ul className='hidden md:flex gap-3 items-center'>
          <li className='cursor-pointer text-zinc-600 hover:text-zinc-800'>
            Tableros
          </li>
          <li className='cursor-pointer text-zinc-600 hover:text-zinc-800'>
            Recientes
          </li>
          <li className='cursor-pointer text-zinc-600 hover:text-zinc-800'>
            Destacados
          </li>
        </ul>
      </div>
      <div className='flex gap-3 text-zinc-400'>
        <button
          type='button'
          className='p-1 bg-transparent hover:bg-zinc-200 rounded-md size-7 flex justify-center items-center hover:text-zinc-800 cursor-pointer'
        >
          <Notification />
        </button>
        <button
          type='button'
          className='p-1 bg-transparent hover:bg-zinc-200 rounded-md size-7 flex justify-center items-center hover:text-zinc-800 cursor-pointer'
        >
          <AddIcon />
        </button>
        <button
          type='button'
          className='p-1 bg-transparent hover:bg-zinc-200 rounded-md size-7 flex justify-center items-center hover:text-zinc-800 cursor-pointer'
          onClick={handleToggle}
        >
          <IconUser />
        </button>
      </div>
      {isOpen && <MenuUser user={user} />}
    </header>
  );
};

export default HeaderDash;
