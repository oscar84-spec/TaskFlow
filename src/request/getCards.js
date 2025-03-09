export const getCards = async (listaId) => {
  try {
    const res = await fetch(`http://localhost:3000/tarjeta/${listaId}`);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
