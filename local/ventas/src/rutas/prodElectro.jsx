import { ProdElectro } from "../data/productos";
import ProductoRender from "./ProductoRender";

function prodElectro() {
  return (
    <div className="container">
      {ProdElectro.map((prod) => (
        <ProductoRender key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default prodElectro;
