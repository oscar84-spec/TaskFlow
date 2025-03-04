import TabIcon from "../assets/icons/TabIcon";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className='w-full h-12 flex justify-between items-center px-2 md:px-10 lg:px-16 xl:px-20 xl:max-w-[1366px]'>
      <div className='w-full flex items-center justify-between'>
        <div className='md:flex items-center gap-10'>
          <Link to='/' className='flex flex-row-reverse items-center gap-2'>
            <h2 className='hidden md:block font-bold'>TaskFlow</h2>
            <i>
              <TabIcon />
            </i>
          </Link>
          <ul className='hidden md:flex gap-3'>
            <Link className='text-zinc-500 hover:text-zinc-800'>Funciones</Link>
            <Link className='text-zinc-500 hover:text-zinc-800'>
              Soluciones
            </Link>
            <Link className='text-zinc-500 hover:text-zinc-800'>Recurso</Link>
            <Link className='text-zinc-500 hover:text-zinc-800'>Precios</Link>
          </ul>
        </div>
        <div className='flex gap-3'>
          <Link to='/login' className='cursor-pointer'>
            <Button texto='Iniciar Sesión' clase='border' tipo='button' />
          </Link>
          <Link to='/register' className='cursor-pointer'>
            <Button
              texto='Registro'
              clase='bg-zinc-800 text-zinc-300'
              tipo='button'
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
