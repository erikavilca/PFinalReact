// Es el que le va a adar formato a todo, es el container de todos los Licks
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button>
              <Link to={"/"}>Inicio</Link>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button>
              <Link to={"Blog"}>Nosotros</Link>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <div className="btn-group" role="group">
              <button type="button" data-bs-toggle="dropdown">
                Productos
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"Alimento"}>
                    Alimentos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"ProdElectro"}>
                    ProductoElectro
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <Link to={"CartWidget"}>
          <FaShoppingCart />
          <span className="numCantidad">10</span>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
