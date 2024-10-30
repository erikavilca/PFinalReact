// Aca es deonde muestro cada producto por su id

import { Link } from "react-router-dom";

function ProductoRender({ title, price, img, id }) {
  return (
    <>
      <Link to={`/Productos/${id}`} className="item">
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <span>${price}</span>
      </Link>
    </>
  );
}

export default ProductoRender;
