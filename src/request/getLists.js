export const getLists = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/lista/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
