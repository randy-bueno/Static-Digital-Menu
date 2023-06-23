import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { InputSearch } from "../InputSearch";

type HeaderProps = {
  showTitle?: boolean;
  showSearch?: boolean;
  showDetails?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Header = ({
  showTitle,
  showSearch,
  value,
  onChange,
}: HeaderProps) => {
  return (
    <header className="header">
      {showTitle ? (
        <Link to="/" className="title">
          <h3>
            Champion<span className="text-primary"> fruit</span>
          </h3>
        </Link>
      ) : null}
      {showSearch ? <InputSearch value={value} onChange={onChange} /> : null}
    </header>
  );
};
