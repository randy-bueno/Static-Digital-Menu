import { useNavigate, useParams } from "react-router-dom";
import { footDataEntry } from "../../Data/DataEntry";
import "./detailt.css";
import IonIcon from "@reacticons/ionicons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";

export const FoodDetailts = () => {
  const { id } = useParams<{ id: string }>();
  const filterfoot = footDataEntry.filter((item) => item.id === id);
  const navigate = useNavigate();
  const [urlActual, setUrlActual] = useState<string>("");

  useEffect(() => {
    const currentUrl = window.location.href;
    setUrlActual(currentUrl);
  }, []);
  return (
    <>
      <div className="container-view">
        {filterfoot.map((f) => (
          <>
            <button onClick={() => navigate(-1)} className="btn-back-detail">
              <IonIcon name="arrow-back-circle-outline" size="large" />
            </button>
            <LazyLoadImage
              width="100%"
              height="100%"
              src={f.url}
              placeholderSrc={f.url}
              effect="blur"
              className="img-view"
              alt={f.name}
            />
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
            <a
              href={`https://wa.me/${18297805250}?text=*¡Hola! Me interesa esto:* 
              %0A%0A*➥ ${urlActual}*
              %0A%0A*◉ Nombre: ${f.name}.*
              %0A%0A*◉ Precio: ${f.price}.*
              %0A%0A*◉ Cantidad:*`}
              target="_blank"
              className="btn-whatsapp"
              rel="whatsapp noreferrer"
            >
              <IonIcon
                name="logo-whatsapp"
                className="logo-whatsapp"
                size="large"
              />
              Realizar pedido
            </a>
          </>
        ))}
      </div>
    </>
  );
};
