import IonIcon from "@reacticons/ionicons";
import { Link, useLocation } from "react-router-dom";
import "./menu.css";

export const Menu = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/buscar" ? null : (
        <section className="section-bottom">
          <ul className="list-menu">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                <IonIcon name="reader" className="icon-size" />
                <span className="menu-text">Categorias</span>
              </Link>
            </li>

            <li className="menu-buscar">
              <Link
                to="/buscar"
                className={location.pathname === "/buscar" ? "active" : ""}
              >
                <IonIcon name="search" className="icon-size" />
                <span className="menu-text">Buscar</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contactos"
                className={location.pathname === "/contactos" ? "active" : ""}
              >
                <IonIcon name="chatbubbles" className="icon-size" />
                <span className="menu-text">Contactos</span>
              </Link>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};
