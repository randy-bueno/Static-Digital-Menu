import { Link } from "react-router-dom";
import "./card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type CardProps = {
  route?: string;
  url?: string;
  title?: string;
  price?: number | string;
  status?: string;
};
export const Card = ({ route, url, title, price, status }: CardProps) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <LazyLoadImage
            width="100%"
            height="100%"
            src={url}
            placeholderSrc={url}
            effect="blur"
            className="img-product"
            alt="#"
          />
        </div>
        <div className="card-body">
          <div className="card-title">
            <h4 className="text-smp">{title}</h4>
          </div>

          <div className="card-detail">
            <div className="item-detail r-radiuz">
              <span>RD$&nbsp;{price}</span>
            </div>
            <div className="item-detail l-radiuz">
              <span className="status">{status}</span>
            </div>
          </div>
          <div className="card-footer">
            <Link className="btn-detail" to={`/alimento/${route}`}>
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
