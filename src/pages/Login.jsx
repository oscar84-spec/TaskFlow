import React from "react";
import Header from "../Components/Header";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { validationLogin } from "../validaciones/login";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <h3 className='text-2xl font-bold text-center'>Iniciar Sesión</h3>
          <TextField
            label='Correo'
            type='text'
            variant='outlined'
            className='w-full'
            {...register("email", validationLogin.email)}
          />
          {errors.email && (
            <span className='text-red-500 text-sm'>{errors.email.message}</span>
          )}
          <TextField
            label='Contraseña'
            type='password'
            variant='outlined'
            className='w-full'
            {...register("password", validationLogin.password)}
          />
          {errors.password && (
            <span className='text-red-500 text-sm'>
              {errors.password.message}
            </span>
          )}
          <Button type='submit' variant='contained'>
            Iniciar Sesión
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Login;
