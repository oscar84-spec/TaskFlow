import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { addList } from "../request/AddList";

const AddList = ({ dataTab, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await addList(data, dataTab);
    if (!res) {
      alert("Error al agregar lista");
    } else {
      window.location.reload();
      onClose();
    }
  };

  return (
    <form
      className='absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-3 bg-zinc-100 p-5 rounded-md'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className='text-xl font-semibold text-center'>Agregar Lista</h3>
      <TextField
        label='Nombre de la lista'
        type='text'
        variant='outlined'
        {...register("titulo", {
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
      {errors.titulo && (
        <span className='text-red-500 text-sm'>{errors.titulo.message}</span>
      )}
      <Button variant='contained' type='submit'>
        Agregar
      </Button>
    </form>
  );
};

export default AddList;
