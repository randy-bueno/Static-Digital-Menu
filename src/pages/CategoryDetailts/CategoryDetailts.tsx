import { useParams } from "react-router-dom";
import { Subtitle } from "../../components/Subtitle";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { footDataEntry } from "../../Data/DataEntry";

export const CategoryDetailts = () => {
  const { category } = useParams<{ category: string }>();
  const filterCategory = footDataEntry.filter((item) => item.category === category);
  return (
    <>
    <Header showTitle />
      <Subtitle title={category} />
      <main className="content-cards bottom ">
        <section className="container">
          {filterCategory.map((d) => (
            <Card
              key={d.id}
              route={d.id}
              url={d.url}
              title={d.name}
              price={d.price}
              status={d.status}
            />
          ))}
        </section>
      </main>
    </>
  );
};
