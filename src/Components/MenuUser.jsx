import { fetchLogout } from "../request/logout";
import { useNavigate } from "react-router-dom";

const MenuUser = ({ user }) => {
  const Letter = user.nombre.slice(0, 1);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await fetchLogout();
    if (res) {
      navigate("/");
    }
  };
  return (
    <div className='absolute top-12 left-0 w-full border flex flex-col gap-3 justify-center items-center p-5 z-20 md:left-[60%] md:w-72 lg:left-[70%] xl:left-[75%]'>
      <div className='w-full flex flex-col gap-2'>
        <div className='flex gap-3 justify-start items-center'>
          <div className='size-10 flex justify-center items-center rounded-md bg-zinc-300 text-2xl font-semibold'>
            {Letter}
          </div>
          <span className='text-zinc-500'>
            {user.nombre} {user.apellido}
          </span>
        </div>
        <span className='text-zinc-600'>{user.email}</span>
        <button
          type='button'
          className='bg-zinc-800 text-zinc-100 rounded-md w-full h-10'
          onClick={handleLogout}
        >
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default MenuUser;
