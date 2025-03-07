import TabIcon from "../assets/icons/TabIcon";
import UserIcon from "../assets/icons/UserIcon";
import StarIcon from "../assets/icons/StarIcon";
import RightIcon from "../assets/icons/RightIcon";
import DownIcon from "../assets/icons/DownIcon";
import AddIcon from "../assets/icons/AddIcon";
import { useState } from "react";

const SideBar = ({ estilo }) => {
  const [open, setOpen] = useState(false);
  const handletToggle = () => setOpen(!open);

  return (
    <div className={`hidden md:flex flex-col gap-3 p-2 bg-sidebar ${estilo}`}>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 text-text'>
          <TabIcon />
          <h2 className='text-xl text-text '>Tableros</h2>
        </div>

        <div className='flex flex-col gap-2 ml-5'>
          <div className='flex gap-2 text-zinc-400'>
            <StarIcon />{" "}
            <h2 className='w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md text-text'>
              Tableros Destacados
            </h2>
          </div>
          <div className='flex gap-2 text-zinc-400'>
            <UserIcon />
            <h2 className='w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md text-text'>
              Tableros de equipo
            </h2>
          </div>
        </div>
      </div>
      <div className='flex flex-col  gap-3'>
        <div
          className='flex items-center gap-1 text-zinc-400'
          onClick={handletToggle}
        >
          {open ? <DownIcon /> : <RightIcon />}
          <h2 className='w-full flex items-center text-text h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-700'>
            Tus tableros
          </h2>
        </div>
        {open && (
          <div className='flex flex-col gap-2 ml-7'>
            <h2 className='w-full flex items-center text-text h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-700'>
              Campaña de marketing
            </h2>
            <h2 className='w-full flex items-center text-text h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-700'>
              Plan de producto
            </h2>
          </div>
        )}
        <div className='w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md gap-2 text-zinc-400'>
          <AddIcon />
          <h2 className='text-text font-medium'>Crear nuevo tablero</h2>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
