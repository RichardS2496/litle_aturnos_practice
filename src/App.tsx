import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useUserData } from "./hooks/useUserData";
import { MyTeams } from "./components/MyTeams";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
//import { useMyTeams } from "./hooks/useMyTeams";

const myAvatar = import.meta.env.VITE_API_AVATARS_URL;

function App() {
  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useUserData();

  if (userLoading) return <p>Cargando...</p>;
  if (userError) return <p>Error al cargar la información</p>;
  return (
    <section className="main-content-view">
      <section className="litle-body">
        <div className="sidebar">
          <img src={`${myAvatar}/${userData.element.avatar}`} alt="" />
          <h1>{userData.element.username}</h1>
          <p>{userData.element.email}</p>
          <hr />
          <Navbar />

          {/* <button className="showTeams-btn">Mis Equipos</button> */}
        </div>
        <div className="routesView">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-teams" element={<MyTeams />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </section>
    </section>
  );
}

export default App;
