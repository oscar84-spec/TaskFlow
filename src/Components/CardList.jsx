import TaskCards from "./TaskCards";
import { Modal } from "@mui/material";
import AddCard from "./AddCard";
import { useState, useEffect } from "react";
import { getCards } from "../request/getCards";

const CardList = ({ lista }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tarjetas, setTarjetas] = useState([]);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const obtenerTarjetas = async () => {
      try {
        const res = await getCards(lista._id);
        setTarjetas(res);
      } catch (error) {
        console.error("Error al obtener tarjetas:", error);
        setTarjetas([]);
      }
    };
    obtenerTarjetas();
  }, [lista._id]);

  const handleCard = async (nuevaTarjeta) => {
    if (!nuevaTarjeta?._id) {
      console.error("Lista inválida:", nuevaTarjeta);
      return;
    }

    // Vuelve a consultar las listas del backend
    try {
      const updatedLists = await getCards(lista._id);
      setTarjetas(updatedLists);
    } catch (error) {
      console.error("Error al actualizar listas:", error);
    }
  };

  console.log("lista datos", lista.titulo);
  return (
    <div className='w-full h-full shrink-0 bg-[#f1f9f9] rounded-md md:w-72'>
      <div className='flex flex-row justify-between items-center p-3'>
        <h3 className='font-medium text-lg'>{lista?.titulo}</h3>
        <button
          type='button'
          className='w-max px-2 py-0.5 border rounded-md cursor-pointer'
        >
          X
        </button>
      </div>
      <div className='shrink-0 rounded-md h-[29rem] p-2 flex flex-col gap-3 overflow-y-auto'>
        {tarjetas.map((tarjeta) => (
          <TaskCards key={tarjeta._id} tarjeta={tarjeta} />
        ))}

        <button
          type='button'
          className='w-full h-10 bg-btn-primary text-zinc-100 rounded-md shrink-0 cursor-pointer'
          onClick={handleOpenModal}
        >
          Agregar tarjeta
        </button>
        <Modal open={openModal} onClose={handleCloseModal}>
          <AddCard
            onClose={handleCloseModal}
            listaId={lista._id}
            onAddCard={handleCard}
          />
        </Modal>
      </div>
    </div>
  );
};

export default CardList;
