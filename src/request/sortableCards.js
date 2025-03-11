export const sortableCards = async (oldIndex, newIndex, listId) => {
  try {
    const res = await fetch(`http://localhost:3000/lista/sortable/${listId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldIndex, newIndex }),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
