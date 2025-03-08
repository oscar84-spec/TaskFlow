export const getTabs = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/tablero?idUsuario=${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
