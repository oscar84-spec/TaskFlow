import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { AddTablero } from "../request/agregar_tablero";

const AddTab = ({ user, onClose, onTabAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await AddTablero(data, user._id);
      console.log(res);
      if (!res) {
        alert("Error al agregar tablero");
      } else {
        if (onTabAdd) {
          onTabAdd(res);
        }
        reset();
        onClose();
      }
    } catch (error) {
      console.error("Error al agregar tablero:", error);
    }
  };
  return (
    <form
      className='absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-3 bg-zinc-100 p-5 rounded-md'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className='text-xl font-semibold text-center'>Agregar Tablero</h3>
      <TextField
        label='Nombre del tablero'
        type='text'
        variant='outlined'
        {...register("nombre", {
          required: true,
          minLength: {
            value: 3,
            message: "El nombre debe tener al menos 3 caracteres",
          },
          maxLength: {
            value: 20,
            message: "El nombre debe tener menos de 20 caracteres",
          },
        })}
      />
      {errors.nombre && (
        <p className='text-red-500 text-sm'>El nombre es requerido</p>
      )}
      <Button variant='contained' type='submit'>
        Guardar
      </Button>
    </form>
  );
};

export default AddTab;
