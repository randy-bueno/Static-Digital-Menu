import { Header } from "../../components/Header";
import { Networks } from "../../components/Networks";
import "./contacts.css";

export const Contacts = () => {
  return (
    <>
      <Header showTitle />
      <section className="content-contacts">
        <div className="card-contacts">
          <div className="card-header-contacts">
            <h4>Contactos</h4>
          </div>
          <div className="card-body-contacts">
            <ul className="list-contacts">
              <Networks name="WhatsApp" url={`https://wa.me/${18297805250}?text=*¡Hola!*`} network="(829) 780-5250" />
              <Networks name="Instagram" url="https://www.instagram.com/champion_frutas/" network="champion_frutas" />
              <Networks name="Creado por" url="https://www.instagram.com/r_a_n_d_y_b_u_e_n_o/" network="Randy M. Bueno" />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
