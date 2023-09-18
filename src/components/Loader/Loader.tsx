import { Triangle } from "react-loader-spinner";
import "./loader.css";
export const Loader = () => {
  return (
    <div className="loader-overlay">
    <Triangle
      height="80"
      width="80"
      color="#ee6b00"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      visible={true}
    />
    </div>
  );
};
