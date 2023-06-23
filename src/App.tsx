import { BrowserRouter } from "react-router-dom";
import { Navegation } from "./Navegation";
export const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
    </BrowserRouter>
  );
}