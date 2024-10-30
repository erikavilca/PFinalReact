
import { useRef, useState } from "react";
import { ProductoMayor, ProdElectro } from "../data/productos";
import { useParams } from "react-router-dom";

function ProductosDetallados() {
  const [allProducts, setAllProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const producto =
    ProductoMayor.find((prod) => prod.id === parseInt(id)) ||
    ProdElectro.find((prod) => prod.id === parseInt(id));

  const handleQuantityChange = (e) => {
    const value = Math.max(
      1,
      Math.min(producto.stock, parseInt(e.target.value))
    );
    setQuantity(value);
  };

  const agregadoCart = (prod) => { 
      setAllProducts((prodCart)=>{
      const existingProduct = prodCart.id  === prod.id;
      // console.log(existingProduct)
console.log(prod.id)
// const suma = existingProduct.reduce((quantity, stock) => quantity + stock , 0);
// console.log(suma)


        if (existingProduct) {
          return prodCart.map(prod=> prod.quantity + 5

          )
        } else {
          return [...prodCart, { ...producto, quantity }];
        }
      }
  )};
    
    console.log(allProducts)

  return (
    <div className="containerDetalle">
      <div className="itemDetallado">
      <img src={producto.img} alt={producto.title} />
        <h3>{producto.title}</h3>
        <p>{producto.descrpcion}</p>
        <br />
        <div className="btnContainer">
          <span>${producto.price}</span>
          <button
            onClick={() => setQuantity((count) => Math.max(1, count - 1))}>-
          </button>
          <button>{quantity}</button>
          <button onClick={() => setQuantity((count) => Math.min(producto.stock ,count + 1))}>
            +
          </button>
        </div>
        <button onClick={ () => agregadoCart(producto) }>Agregar</button>
      </div>
    </div>
  );
}

export default ProductosDetallados;
