import { useEffect, useState } from "react";
import { getDataDashboard } from "../request/dashboard_data";
import HeaderDash from "../Components/HeaderDash";
import SideBar from "../Components/SideBar";
import "../assets/css/dashboard.css";
import Boards from "../Components/Boards";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataTab, setDataTab] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await getDataDashboard();
        setUser(res);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener usuario:", error);
        setLoading(false);
      }
    };
    data();
  }, []);

  const tablerosData = (data) => setDataTab(data);

  if (loading) return <p>Cargando...</p>;
  if (!user) return <p>No tienes acceso. Inicia sesión.</p>;

  return (
    <main className='w-full h-screen w-max-[1366px] main'>
      <HeaderDash user={user} clase='header' />
      <section className='dashboard flex'>
        <SideBar estilo='sidebar' user={user} tablerosData={tablerosData} />
        <div className='flex flex-1 overflow-x-auto'>
          <Boards estilo='boards' dataTab={dataTab} user={user} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
