const url = "http://localhost:3000/dashboard";

export const getDataDashboard = async () => {
  try {
    const res = await fetch(url, {
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
