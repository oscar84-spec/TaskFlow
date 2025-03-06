const url = "http://localhost:3000/logout";

export const fetchLogout = async () => {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
