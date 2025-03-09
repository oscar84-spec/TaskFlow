export const addCards = async (data, listaId) => {
  try {
    const res = await fetch(`http://localhost:3000/tarjeta/${listaId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
