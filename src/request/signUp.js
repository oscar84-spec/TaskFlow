const url = "http://localhost:3000/user";

export const fetchRegistro = async (data) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
