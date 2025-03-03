import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='flex flex-col gap-0 task'>
        <h3 className='font-bold text-lg'>TaskFlow</h3>
        <p className='text-zinc-500 text-sm'>
          Organiza todo, juntos. TaskFlow ayuda a los equipos a avanzar en su
          trabajo.
        </p>
      </div>
      <div className='flex flex-col gap-3 producto'>
        <h4 className='text-lg font-bold'>Producto</h4>
        <ul className='flex flex-col gap-1'>
          <li className='text-md text-zinc-500 hover:text-zinc-800'>
            Funciones
          </li>
          <li className='text-md text-zinc-500 hover:text-zinc-800'>
            Integraciones
          </li>
          <li className='text-md text-zinc-500 hover:text-zinc-800'>Precios</li>
        </ul>
      </div>
      <div className='flex flex-col gap-3 recursos'>
        <h4 className='text-lg font-bold'>Recursos</h4>
        <ul className='flex flex-col gap-1'>
          <li className='text-md text-zinc-500 hover:text-zinc-800'>Blog</li>
          <li className='text-md text-zinc-500 hover:text-zinc-800'>
            Documentación
          </li>
          <li className='text-md text-zinc-500 hover:text-zinc-800'>Guías</li>
        </ul>
      </div>
      <div className='flex flex-col gap-3 empresa'>
        <h4 className='text-lg font-bold'>Empresa</h4>
        <ul className='flex flex-col gap-1'>
          <li className='text-md text-zinc-500 hover:text-zinc-800'>
            Sobre nosotros
          </li>
          <li className='text-md text-zinc-500 hover:text-zinc-800'>Empleo</li>
          <li className='text-md text-zinc-500 hover:text-zinc-800'>
            Contacto
          </li>
        </ul>
      </div>

      <hr className='border-zinc-400 borde' />

      <span className='text-zinc-600 text-md derechos'>
        © 2024 TaskFlow. Todos los derechos reservados.
      </span>
    </footer>
  );
};

export default Footer;
