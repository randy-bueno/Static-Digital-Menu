import { Link } from "react-router-dom";
import "./category.css";

type ItemCartegoryProps = {
  url?: string;
  name?: string;
};

export const ItemCartegory = ({ url, name }: ItemCartegoryProps) => {
  return (
    <Link to={`/categorias-detalle/${name}`} className="card-category">
      <img src={url} className="img-category" alt="#" />
      <strong className="name-category">{name}</strong>
    </Link>
  );
};
