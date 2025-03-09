import Button from "./Button";
import CardList from "./CardList";
import { useEffect, useState } from "react";
import { getTabById } from "../request/getTabById";
import { getTabs } from "../request/getTabs";
import { getLists } from "../request/getLists";
import { Modal } from "@mui/material";
import AddList from "./AddList";

const Boards = ({ estilo, dataTab, user }) => {
  const [tab, setTab] = useState([]);
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const loadingFirstOrSelectedTab = async () => {
      try {
        setLoading(true);
        setError(null);

        if (tab?.length === 0 && user?._id) {
          const tableros = await getTabs(user._id);
          if (Array.isArray(tableros) && tableros.length > 0) {
            // Cargamos el primer tablero
            const res = await getTabById(tableros[0]._id);
            setTab(res);
          } else {
            // No hay tableros disponibles
            setTab(null);
            setError("No hay tableros disponibles");
          }
        } else {
          const res = await getTabById(dataTab);
          setTab(res);
        }
      } catch (error) {
        console.error("Error al cargar tablero:", error);
        setError("Error al cargar el tablero");
        setTab(null);
      } finally {
        setLoading(false);
      }
    };

    loadingFirstOrSelectedTab();
  }, [dataTab]);
  // const { listas } = tab;

  useEffect(() => {
    {
      if (!tab || !tab._id) return;
      const dataList = async () => {
        try {
          const res = await getLists(tab._id);
          setList(res);
        } catch (error) {
          console.error("Error al obtener listas:", error);
          setList([]);
        }
      };
      dataList();
    }
  }, [tab?._id]);

  console.log("Listas, boards", list);

  if (loading) {
    return (
      <div
        className={`bg-board h-full flex items-center justify-center ${estilo} md:w-full`}
      >
        <p className='text-lg font-medium'>Cargando tablero...</p>
      </div>
    );
  }

  // Si hay un error o no hay tableros
  if (error || !tab) {
    return (
      <div
        className={`bg-board h-full flex flex-col items-center justify-center gap-4 ${estilo} md:w-full`}
      >
        <p className='text-xl font-medium'>
          {error || "No hay tableros disponibles"}
        </p>
        {/* <button
          onClick={handleOpenModal}
          className='px-4 py-2 bg-btn-primary text-white rounded-md hover:bg-opacity-90'
        >
          Crear nuevo tablero
        </button> */}
      </div>
    );
  }

  // Extraemos las listas del tablero (si existen)
  // const listas = tab.listas || [];

  const handleList = async (nuevaLista) => {
    if (!nuevaLista?._id) {
      console.error("Lista inválida:", nuevaLista);
      return;
    }

    // Vuelve a consultar las listas del backend
    try {
      const updatedLists = await getLists(tab._id);
      setList(updatedLists);
    } catch (error) {
      console.error("Error al actualizar listas:", error);
    }
  };

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
        {list?.length > 0 ? (
          list.map((lista) => <CardList key={lista._id} lista={lista} />)
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
          <AddList
            tabId={tab._id}
            onClose={handleCloseModal}
            onListAdd={handleList}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Boards;
