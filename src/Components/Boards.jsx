import Button from "./Button";
import CardList from "./CardList";

const Boards = ({ estilo }) => {
  return (
    <div
      className={`bg-zinc-300 h-full flex flex-col gap-4 p-2 ${estilo} md:w-full`}
    >
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-bold'>Nombre del tablero</h1>
        </div>
        <div className='flex items-center gap-2'>
          <Button texto='Compartir' clase='bg-zinc-800 text-zinc-300' />
          <Button texto='...' clase='border' tipo='button' />
        </div>
      </div>
      <div className='border-3 h-full  border-red-500 flex gap-4 overflow-x-auto pb-4'>
        <CardList />
        <button
          type='button'
          className='w-52 h-10 shrink-0 rounded-md bg-zinc-800 text-zinc-100'
        >
          Agregar lista
        </button>
      </div>
    </div>
  );
};

export default Boards;
