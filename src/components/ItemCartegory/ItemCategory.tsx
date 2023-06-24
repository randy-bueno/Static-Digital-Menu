import { Link } from "react-router-dom";
import "./category.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type ItemCartegoryProps = {
  url?: string;
  name?: string;
};

export const ItemCartegory = ({ url, name }: ItemCartegoryProps) => {
  return (
    <Link to={`/categorias-detalle/${name}`} className="card-category">
      <LazyLoadImage
        width="100%"
        height="100%"
        src={url}
        placeholderSrc={url}
        effect="blur"
        className="img-category"
        alt="#"
      />
      <strong className="name-category">{name}</strong>
    </Link>
  );
};
