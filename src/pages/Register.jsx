import Header from "../Components/Header";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { validationSignUp } from "../validaciones/signUp";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <main className='w-full xl:smax-w-[1366px]'>
      <Header />
      <section className='w-full h-[calc(100vh-48px)] p-2 md:flex justify-center items-center'>
        <form
          className='w-full p-2 flex flex-col gap-3 max-w-[400px] shadow-md shadow-zinc-400 md:p-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className='text-2xl font-bold text-center'>Registro</h3>
          <div className='flex flex-col gap-3 lg:flex-row'>
            <TextField
              label='Nombre'
              type='text'
              variant='outlined'
              className='w-full'
              {...register("nombre", validationSignUp.nombre)}
            />
            {errors.nombre && (
              <span className='text-red-500 text-sm'>
                {errors.nombre.message}
              </span>
            )}
            <TextField
              label='Apellido'
              type='text'
              variant='outlined'
              className='w-full'
              {...register("apellido", validationSignUp.apellido)}
            />
            {errors.apellido && (
              <span className='text-red-500 text-sm'>
                {errors.apellido.message}
              </span>
            )}
          </div>
          <TextField
            label='Correo electrónico'
            type='email'
            variant='outlined'
            className='w-full'
            {...register("email", validationSignUp.email)}
          />
          {errors.email && (
            <span className='text-red-500 text-sm'>{errors.email.message}</span>
          )}
          <TextField
            label='Contraseña'
            type='password'
            variant='outlined'
            className='w-full'
            {...register("password", validationSignUp.password)}
          />
          {errors.password && (
            <span className='text-red-500 text-sm'>
              {errors.password.message}
            </span>
          )}
          <TextField
            label='Confirmar contraseña'
            type='password'
            variant='outlined'
            className='w-full'
            {...register("confirmPassword", validationSignUp.confirmPassword)}
          />
          {errors.confirmPassword && (
            <span className='text-red-500 text-sm'>
              {errors.confirmPassword.message}
            </span>
          )}
          <Button type='submit' variant='contained' className='w-full'>
            Registrarme
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Register;
