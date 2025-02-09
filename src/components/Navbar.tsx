import { Link } from "react-router-dom";
import "../styles/navbar.css";

export function Navbar() {
  return (
    <nav className="main-navbar">
      <Link to="/">Inicio</Link>
      <Link to="/my-teams">Mis Equipos</Link>
    </nav>
  );
}
