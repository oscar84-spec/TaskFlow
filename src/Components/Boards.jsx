import Button from "./Button";
import CardList from "./CardList";

const Boards = ({ estilo }) => {
  return (
    <div
      className={`bg-board h-full flex flex-col gap-4 p-2 ${estilo} md:w-full`}
    >
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-bold'>Nombre del tablero</h1>
        </div>
        <div className='flex items-center gap-2'>
          <Button
            texto='Compartir'
            clase='bg-btn-secondary text-zinc-300 cursor-pointer'
          />
          <Button texto='...' clase='border cursor-pointer' tipo='button' />
        </div>
      </div>
      <div className='h-full flex gap-4 overflow-x-auto pb-4'>
        <CardList />
        <button
          type='button'
          className='w-52 h-10 shrink-0 rounded-md bg-btn-primary text-zinc-100 cursor-pointer'
        >
          Agregar lista
        </button>
      </div>
    </div>
  );
};

export default Boards;
