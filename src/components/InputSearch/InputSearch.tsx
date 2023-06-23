import IonIcon from "@reacticons/ionicons";
import { useNavigate } from "react-router-dom";

type inputSearchProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
export const InputSearch = ({ onChange, value }: inputSearchProps) => {
  const navigate = useNavigate();

  return (
    <div className="content-search">
      <button onClick={() => navigate(-1)} className="btn-back">
        <IonIcon name="arrow-back-circle" />
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Buscar alimentos"
        autoFocus={true}
        value={value}
        onChange={onChange}
        aria-label="buscar"
      />
    </div>
  );
};
