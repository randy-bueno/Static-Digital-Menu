import { useState } from "react";
import { Header } from "../../components/Header";
import { Subtitle } from "../../components/Subtitle";

export const Search = () => {
  const [search, setSearch] = useState("");

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };
  return (
    <>
      <Header showSearch value={search} onChange={getValue} />
      <Subtitle title={search} />
      <main className="content-cards">
        <section className="container"></section>
      </main>
    </>
  );
};
