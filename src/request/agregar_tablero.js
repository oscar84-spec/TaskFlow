const url = "http://localhost:3000/tablero";

export const AddTablero = async (data, idUsuario) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...data, idUsuario }),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
