import Button from "./Button";
import CheckIcon from "../assets/icons/CheckIcon";

const CardsPlans = () => {
  const planes = [
    {
      title: "Gratis",
      description: "Para individuos o equipos pequeños que están comenzando",
      price: "0",
      features: [
        "Tableros ilimitados",
        "Hasta 10 miembros",
        "Automatizaciones básicas",
      ],
      textButton: "Comenzar",
    },
    {
      title: "Pro",
      description: "Para equipos en crecimiento que necesitan más funciones",
      price: "10",
      features: [
        "Todo lo de Gratis",
        "Miembros ilimitados",
        "Automatizaciones avanzadas",
        "Controles de administrador",
      ],
      textButton: "Prueba gratis",
    },
    {
      title: "Empresa",
      description:
        "Para organizaciones que necesitan seguridad y soporte adicional",
      price: "25",
      features: [
        "Todo lo de Pro",
        "Seguridad nivel empresarial",
        "Soporte prioritario",
        "Integraciones personalizadas",
      ],
      textButton: "Contactar soporte",
    },
  ];
  return (
    <>
      {planes.map(
        ({ title, description, price, features, textButton }, index) => (
          <div
            key={index}
            className='w-full p-3 flex flex-col gap-3 bg-zinc-200 rounded-md md:w-72 md:justify-between md:p-5 lg:gap-7 shadow-md shadow-zinc-400'
          >
            <div className='flex flex-col gap-1'>
              <h3 className='text-xl font-bold '>{title}</h3>
              <span className='text-sm text-zinc-600'>{description}</span>
              <span className='text-2xl font-bold'>${price}</span>
            </div>
            <ul className='flex flex-col gap-2'>
              {features.map((feature, index) => (
                <li key={index} className='text-md flex gap-3'>
                  <CheckIcon /> {feature}
                </li>
              ))}
            </ul>
            <button
              type='button'
              className='w-full h-9 rounded-md p-3 bg-zinc-800 text-zinc-200 flex items-center justify-center'
            >
              {textButton}
            </button>
          </div>
        )
      )}
    </>
  );
};

export default CardsPlans;
