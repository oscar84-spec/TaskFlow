import Badge from "./Badge";
import React from "react";

const Boards = ({ estilo }) => {
  return (
    <div className={`w-full h-full bg-zinc-100 ${estilo}`}>
      {/* ------------------------------------------------------- */}
      <div className='flex justify-between items-center px-3 mt-2'>
        <h3 className='text-2xl font-bold'>Nombre del tablero</h3>
        <div className='w-1/2 flex gap-2 items-center md:w-max'>
          <button
            type='button'
            className='w-max px-2 py-1 border rounded-md cursor-pointer'
          >
            Compartir
          </button>
          <button
            type='button'
            className='w-max px-2 py-1 border rounded-md cursor-pointer'
          >
            ...
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------- */}

      {/* ---------------------Container Main---------------------- */}
      <div className='w-full h-[calc(100vh-112px)] max-h-[calc(100vh-112px)] max-w-full overflow-x-auto md:p-3'>
        {/* ---------------------Listas------------------------------ */}

        <div className='w-full h-max max-h-full border border-zinc-300 bg-zinc-50 rounded-md flex flex-col gap-2 p-2 md:w-72 '>
          <div className='w-full flex justify-between items-center'>
            <h3 className='text-2xl font-semibold'>Por hacer</h3>
            <button
              type='button'
              className='cursor-pointer size-7 border rounded-md'
            >
              X
            </button>
          </div>
          {/* -------------------------------------------------------- */}
          <div className='w-full max-h-full flex flex-col gap-2 overflow-y-auto'>
            <div className='border border-zinc-400 relative p-2 flex flex-col gap-2 rounded-md'>
              <div className='flex gap-2 flex-wrap'>
                <Badge />
              </div>
              <span className='font-semibold'>Investigar competidores</span>
              <button
                type='button'
                className='cursor-pointer size-5 rounded-md absolute top-2 right-2'
              >
                X
              </button>
            </div>
          </div>
          <button
            type='button'
            className='w-full px-3 py-2 rounded-md text-zinc-100 bg-zinc-800'
          >
            Agregar tarjeta
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------- */}
    </div>
  );
};

export default Boards;
