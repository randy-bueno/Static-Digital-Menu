import { useState } from "react";
import { Header } from "../../components/Header";
import { Subtitle } from "../../components/Subtitle";
import { footDataEntry } from "../../Data/DataEntry";
import { Card } from "../../components/Card";

export const Search = () => {
  const [search, setSearch] = useState("");

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const filteredData = footDataEntry.filter((entry) =>
    entry.name.toLowerCase().includes(search.toLowerCase())
  );

  const limitSearch = filteredData.slice(0,20);

  return (
    <>
      <Header showSearch value={search} onChange={getValue} />
      <Subtitle title="Resultados..." />
      <main className="content-cards bottom">
        <section className="container">
          {search !== "" ? (
            <>
              {limitSearch.map((entry) => (
                <Card
                key={entry.id}
                route={entry.id}
                url={entry.url}
                title={entry.name}
                price={entry.price}
                status={entry.status}
              />
              ))}
            </>
          ) : null}
        </section>
      </main>
    </>
  );
};
