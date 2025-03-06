import TabIcon from "../assets/icons/TabIcon";
import UserIcon from "../assets/icons/UserIcon";
import StarIcon from "../assets/icons/StarIcon";
import RightIcon from "../assets/icons/RightIcon";
import DownIcon from "../assets/icons/DownIcon";
import AddIcon from "../assets/icons/AddIcon";

const SideBar = ({ estilo }) => {
  return (
    <div className={`hidden md:flex flex-col gap-3 p-2 ${estilo}`}>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 text-zinc-400'>
          <TabIcon />
          <h2 className='text-xl text-zinc-900 '>Tableros</h2>
        </div>

        <div className='flex flex-col gap-2 ml-5'>
          <div className='flex gap-2 text-zinc-400'>
            <StarIcon /> <h2 className=' text-zinc-700'>Tableros Destacados</h2>
          </div>
          <div className='flex gap-2 text-zinc-400'>
            <UserIcon />
            <h2 className=' text-zinc-700'>Tableros de equipo</h2>
          </div>
        </div>
      </div>
      <div className='flex flex-col  gap-3'>
        <div className='flex gap-1 text-zinc-500'>
          <DownIcon />
          <h2 className='text-zinc-900'>Tus tableros</h2>
        </div>
        <div className='flex flex-col gap-2 ml-7'>
          <h2 className='text-zinc-900'>Campaña de marketing</h2>
          <h2 className='text-zinc-900'>Plan de producto</h2>
          <div className='flex gap-2 text-zinc-400'>
            <AddIcon />
            <h2 className='text-zinc-700 font-medium'>Crear nuevo tablero</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
