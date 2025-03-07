import TaskCards from "./TaskCards";

const CardList = () => {
  return (
    <div className='w-full h-full shrink-0 bg-[#f1f9f9] rounded-md md:w-72'>
      <div className='flex flex-row justify-between items-center p-3'>
        <h3 className='font-medium text-lg'>Por hacer</h3>
        <button
          type='button'
          className='w-max px-2 py-0.5 border rounded-md cursor-pointer'
        >
          X
        </button>
      </div>
      <div className='shrink-0 rounded-md h-[29rem] p-2 flex flex-col gap-3 overflow-y-auto'>
        <TaskCards />
        <TaskCards />
        <TaskCards />
        <TaskCards />

        <TaskCards />
        <TaskCards />
        <button
          type='button'
          className='w-full h-10 bg-btn-primary text-zinc-100 rounded-md shrink-0 cursor-pointer'
        >
          Agregar tarjeta
        </button>
      </div>
    </div>
  );
};

export default CardList;
