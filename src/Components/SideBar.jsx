import TabIcon from "../assets/icons/TabIcon";
import UserIcon from "../assets/icons/UserIcon";
import StarIcon from "../assets/icons/StarIcon";
import RightIcon from "../assets/icons/RightIcon";
import DownIcon from "../assets/icons/DownIcon";
import AddIcon from "../assets/icons/AddIcon";
import { useState, useEffect } from "react";
import AddTab from "./AddTab";
import { Modal } from "@mui/material";
import { getTabs } from "../request/getTabs";

const SideBar = ({ estilo, user, tablerosData }) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [tablero, setTablero] = useState([]);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handletToggle = () => setOpen(!open);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await getTabs(user._id);
        if (Array.isArray(res)) {
          setTablero(res);
        } else {
          console.error("La respuesta de getTabs no es un array:", res);
          setTablero([]);
        }
      } catch (error) {
        console.error("Error al obtener tableros:", error);
        setTablero([]);
      }
    };
    if (user && user._id) {
      data();
    }
  }, [user, user._id]);

  const handleTablero = (nuevoTablero) => {
    if (!nuevoTablero || !nuevoTablero._id) {
      console.error("El nuevo tablero no tiene un _id válido:", nuevoTablero);
      return;
    }
    setTablero((prevTablero) => [...prevTablero, nuevoTablero]);
  };

  return (
    <div className={`hidden md:flex flex-col gap-3 p-2 bg-sidebar ${estilo}`}>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 text-text'>
          <TabIcon />
          <h2 className='text-xl text-text '>Tableros</h2>
        </div>

        <div className='flex flex-col gap-2 ml-5'>
          <div className='flex gap-2 text-zinc-400'>
            <StarIcon />{" "}
            <h2 className='w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md text-text'>
              Tableros Destacados
            </h2>
          </div>
          <div className='flex gap-2 text-zinc-400'>
            <UserIcon />
            <h2 className='w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md text-text'>
              Tableros de equipo
            </h2>
          </div>
        </div>
      </div>
      <div className='flex flex-col  gap-3'>
        <div
          className='flex items-center gap-1 text-zinc-400'
          onClick={handletToggle}
        >
          {open ? <DownIcon /> : <RightIcon />}
          <h2 className='w-full flex items-center text-text h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-700'>
            Tus tableros
          </h2>
        </div>
        {open && (
          <div
            className={`flex flex-col gap-2 ml-7 overflow-y-auto ${
              tablero.length > 0 ? "h-max max-h-28" : "h-0"
            }`}
          >
            {tablero.map((tablero) => (
              <h2
                key={tablero._id}
                onClick={() => tablerosData(tablero._id)}
                className='w-full flex items-center text-text h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-700'
              >
                {tablero.nombre}
              </h2>
            ))}
          </div>
        )}
        <div className='w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md gap-2 text-zinc-400'>
          <AddIcon />
          <button
            type='button'
            onClick={handleOpenModal}
            className='text-text font-medium cursor-pointer'
          >
            Crear nuevo tablero
          </button>
          <Modal open={openModal} onClose={handleCloseModal}>
            <AddTab
              user={user}
              onClose={handleCloseModal}
              onTabAdd={handleTablero}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
