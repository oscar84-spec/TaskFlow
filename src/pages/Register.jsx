import Header from "../Components/Header";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { validationSignUp } from "../validaciones/signUp";
import { fetchRegistro } from "../request/signUp";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await fetchRegistro(data);
    if (!res) {
      alert("Error en el registro");
    } else {
      navigate("/dashboard");
    }
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
            <div className='flex flex-col'>
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
            </div>
            <div className='flex flex-col'>
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
            {...register("contrasenia", validationSignUp.contrasenia)}
          />
          {errors.contrasenia && (
            <span className='text-red-500 text-sm'>
              {errors.contrasenia.message}
            </span>
          )}
          <TextField
            label='Confirmar contraseña'
            type='password'
            variant='outlined'
            className='w-full'
            {...register(
              "confirmarContrasenia",
              validationSignUp.confirmarContrasenia
            )}
          />
          {errors.confirmarContrasenia && (
            <span className='text-red-500 text-sm'>
              {errors.confirmarContrasenia.message}
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
