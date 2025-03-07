import TaskCards from "./TaskCards";

const CardList = () => {
  return (
    <div className='w-full h-full shrink-0 border-3 border-green-600 md:w-72'>
      <div className='flex flex-row justify-between items-center p-3'>
        <h3 className='font-medium text-lg'>Por hacer</h3>
        <button type='button' className='w-max px-2 py-0.5 border rounded-md'>
          X
        </button>
      </div>
      <div className='border-3 shrink-0 border-orange-500 h-[29rem] px-2 flex flex-col gap-3 overflow-y-auto'>
        <TaskCards />
        <TaskCards />
        <TaskCards />
        <TaskCards />

        <TaskCards />
        <TaskCards />
        <button
          type='button'
          className='w-full h-10 bg-zinc-800 text-zinc-100 rounded-md shrink-0'
        >
          Agregar tarjeta
        </button>
      </div>
    </div>
  );
};

export default CardList;
