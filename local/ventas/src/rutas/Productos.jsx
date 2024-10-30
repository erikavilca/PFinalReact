// aca es donde est el container de cada producto y donde se produce lo que es que
// se absorbe los datos de {ProductoMayor}.

import { ProductoMayor } from "../data/productos";
import ProductoRender from "./ProductoRender";

function Productos() {
  return (
    <div className="container">
      {ProductoMayor.map((prod) => (
        <ProductoRender key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default Productos;
