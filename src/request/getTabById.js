export const getTabById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/tablero/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
