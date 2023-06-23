import { category } from "../../Data/Category";
import { Header } from "../../components/Header";
import { ItemCartegory } from "../../components/ItemCartegory";
import { Subtitle } from "../../components/Subtitle";

export const Category = () => {
  return (
    <>
      <Header showTitle />
      <Subtitle title="Categorias" />
      <div className="content-category">
        <section className="category">
          {category.map((c, index) => (
            <ItemCartegory key={index} url={c.portada} name={c.name} />
          ))}
        </section>
      </div>
    </>
  );
};
