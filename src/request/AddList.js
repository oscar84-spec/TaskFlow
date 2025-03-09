export const addList = async (list, id) => {
  try {
    const response = await fetch(`http://localhost:3000/lista/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
