import { useNavigate, useParams } from "react-router-dom";
import { footDataEntry } from "../../Data/DataEntry";
import "./detailt.css";
import IonIcon from "@reacticons/ionicons";

export const FoodDetailts = () => {
  const { id } = useParams<{ id: string }>();
  const filterfoot = footDataEntry.filter((item) => item.id === id);
  const navigate = useNavigate();
  return (
    <>
      <div className="container-view">
        {filterfoot.map((f) => (
          <>
            <button onClick={() => navigate(-1)} className="btn-back-detail">
              <IonIcon name="arrow-back-circle-outline" />
            </button>
            <img src={f.url} alt={f.name} className="img-view " />
            <div className="content-descri">
              <div className="col">
                <strong className="sub-title">{f.name}</strong>
                <span className="category-detailt">
                  Categoria{">>>"}
                  {f.category}
                </span>
              </div>
              <div>
                <p className="descri">{f.description}</p>
              </div>
              <div className="col">
                <strong className="sub-title">Precio</strong>
                <p className="descri">${f.price}</p>
              </div>
              <div className="col">
                <strong className="sub-title">Estado</strong>
                <strong className="status-detailt">Disponible</strong>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
