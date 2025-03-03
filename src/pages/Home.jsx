import Header from "../Components/Header";
import { Link } from "react-router-dom";
import TabIcon from "../assets/icons/TabIcon";
import Button from "../Components/Button";
import Cards from "../Components/Cards";
import ListIcon from "../assets/icons/ListIcon";
import UserIcon from "../assets/icons/UserIcon";
import ScheduleIcon from "../assets/icons/ScheduleIcon";
import CardsPlans from "../Components/CardsPlans";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <main className='relative xl:max-w-[1366px]'>
      <div className='fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]'></div>
      </div>
      <Header>
        <div className='w-full flex items-center justify-between'>
          <div className='md:flex items-center gap-10'>
            <Link to='/' className='flex flex-row-reverse items-center gap-2'>
              <h2 className='hidden md:block font-bold        '>TaskFlow</h2>
              <i>
                <TabIcon />
              </i>
            </Link>
            <ul className='hidden md:flex gap-3'>
              <Link className='text-zinc-500 hover:text-zinc-800'>
                Funciones
              </Link>
              <Link className='text-zinc-500 hover:text-zinc-800'>
                Soluciones
              </Link>
              <Link className='text-zinc-500 hover:text-zinc-800'>Recurso</Link>
              <Link className='text-zinc-500 hover:text-zinc-800'>Precios</Link>
            </ul>
          </div>
          <div className='flex gap-3'>
            <Link to='/login'>
              <Button texto='Iniciar Sesión' clase='border' tipo='button' />
            </Link>
            <Link to='/register'>
              <Button
                texto='Registro'
                clase='bg-zinc-800 text-zinc-300'
                tipo='button'
              />
            </Link>
          </div>
        </div>
      </Header>
      <section className='w-full h-[calc(100vh-48px)] px-2 flex flex-col gap-5 md:px-10 lg:px-16  lg:flex-row lg:justify-between lg:items-center xl:px-20'>
        <div className='mt-5 lg:w-1/2'>
          <div className='flex flex-col '>
            <h2 className='text-4xl font-bold text-pretty xl:text-5xl'>
              Organiza todo, juntos.
            </h2>
            <p className='text-md text-zinc-600 mt-2 text-pretty md:text-lg'>
              Reúne el trabajo de tu equipo en un espacio compartido. Desde
              grandes empresas hasta oficinas en casa, la forma en que tu equipo
              trabaja es única.
            </p>
          </div>
          <div className='w-full flex gap-3 mt-5'>
            <Button
              texto='Empezar gratis'
              clase='bg-zinc-800 text-zinc-300'
              tipo='button'
            />
            <Button texto='Saber más' clase='border' tipo='button' />
          </div>
        </div>
        <div className='w-full rounded-md md:w-1/2 lg:'>
          <img
            src='./taskFlow.webp'
            alt='TaskFlow Image'
            className='rounded-md '
          />
        </div>
      </section>

      <section className='px-2 w-full flex flex-col gap-10 md:px-10 lg:px-16 xl:px-20 '>
        <div className='mt-20'>
          <h2 className='text-2xl font-bold text-pretty text-center lg:text-3xl xl:text-4xl'>
            Funciones para ayudar a tu equipo a triunfar
          </h2>
          <span className='block text-center text-zinc-600 text-pretty'>
            Gestión de proyectos potente, flexible y sencilla.
          </span>
        </div>
        <div className='p-3 flex flex-col gap-5 items-center md:flex-row md:p-5 md:flex-wrap md:justify-center'>
          <Cards>
            <ListIcon />
            <h3 className='text-lg font-bold'>Tableros y Listas</h3>
            <p className='text-md text-zinc-600 text-pretty'>
              Organiza el trabajo con tableros, listas y tarjetas. Añade
              detalles, fechas límite y archivos adjuntos.
            </p>
          </Cards>
          <Cards>
            <UserIcon />
            <h3 className='text-lg font-bold'>Colaboración en Equipo</h3>
            <p className='text-md text-zinc-600 text-pretty'>
              Trabaja en tiempo real con los miembros de tu equipo en cualquier
              proyecto.
            </p>
          </Cards>
          <Cards>
            <ScheduleIcon />
            <h3 className='text-lg font-bold'>Vista de Calendario</h3>
            <p className='text-md text-zinc-600 text-pretty'>
              Visualiza tus tareas y fechas límite en un formato de calendario
              claro.
            </p>
          </Cards>
        </div>
      </section>

      <section className='px-2 py-5 w-full flex flex-col gap-10 md:px-10 md:py-10 lg:px-16 lg:py-12 xl:px-20'>
        <div className='flex flex-col gap-3 mt-10'>
          <h2 className='text-2xl font-bold text-pretty text-center'>
            Elige el plan perfecto para ti
          </h2>
          <p className='text-md text-zinc-600 text-pretty text-center'>
            Ya seas un equipo pequeño o una gran organización, tenemos un plan
            que se adapta a tus necesidades.
          </p>
        </div>
        <div className='flex flex-col gap-5 md:flex-row md:justify-center md:flex-wrap'>
          <CardsPlans />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
