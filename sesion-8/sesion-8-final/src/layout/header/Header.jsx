import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="ansiedad" end>
          Ansiedad
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
