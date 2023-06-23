import { Link } from "react-router-dom";
import "./card.css";

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
          <img src={url} className="img-product" alt="#" />
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
