import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { addCards } from "../request/AddCards";

const AddCard = ({ onClose, listaId, onAddCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await addCards(data, listaId);
      onAddCard(result);
      reset();
      onClose();
    } catch (error) {
      console.error("Error al agregar tarjeta:", error);
    }
  };
  return (
    <form
      className='absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-3 bg-zinc-100 p-5 rounded-md'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className='font-medium text-lg text-center'>Agregar Tarjeta</h3>
      <TextField
        variant='outlined'
        label='Nombre de la Tarjeta'
        fullWidth
        margin='normal'
        {...register("titulo", { required: true })}
      />
      {errors.titulo && (
        <span className='text-red-500'>
          El nombre de la tarjeta es requerido
        </span>
      )}
      <textarea
        name='descripcion'
        id='descripcion'
        placeholder='Descripcion'
        className='p-2 border-2 border-zinc-300 rounded-md resize-none outline-0 focus:border-2 focus:border-[#1766aa]'
        {...register("descripcion")}
      ></textarea>
      <div className='flex flex-col gap-3'>
        <h2 className='text-md'>Prioridad</h2>
        <div className='flex gap-2'>
          <input
            type='radio'
            name='prioridad'
            id='alto'
            value='Urgente'
            {...register("prioridad")}
          />
          <label htmlFor='alto'>Urgente</label>
          <input
            type='radio'
            name='prioridad'
            id='medio'
            value='Medio'
            {...register("prioridad")}
          />
          <label htmlFor='medio'>Medio</label>
          <input
            type='radio'
            name='prioridad'
            id='bajo'
            value='Bajo'
            {...register("prioridad")}
          />
          <label htmlFor='bajo'>Bajo</label>
        </div>
      </div>
      <Button variant='contained' color='primary' fullWidth type='submit'>
        Agregar
      </Button>
    </form>
  );
};

export default AddCard;
