import Button from "./Button";
import CardList from "./CardList";
import { useEffect, useState } from "react";
import { getTabById } from "../request/getTabById";
import { Modal } from "@mui/material";
import AddList from "./AddList";

const Boards = ({ estilo, dataTab }) => {
  const [tab, setTab] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  useEffect(() => {
    const data = async () => {
      try {
        const res = await getTabById(dataTab);
        setTab(res);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, [dataTab]);
  const { listas } = tab;

  return (
    <div
      className={`bg-board h-full flex flex-col gap-4 p-2 ${estilo} md:w-full`}
    >
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-bold'>{tab.nombre}</h1>
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
        {listas?.length > 0 ? (
          listas.map((lista) => <CardList key={lista._id} lista={lista} />)
        ) : (
          <></>
        )}
        <button
          type='button'
          onClick={handleOpenModal}
          className='w-52 h-10 shrink-0 rounded-md bg-btn-primary text-zinc-100 cursor-pointer'
        >
          Agregar lista
        </button>
        <Modal open={openModal} onClose={handleCloseModal}>
          <AddList dataTab={dataTab} onClose={handleCloseModal} />
        </Modal>
      </div>
    </div>
  );
};

export default Boards;
