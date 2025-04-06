import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav d-flex flex-row justify-content-center w-100">
            <li className="nav-item mx-2">
              <Link className="btn text-white" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="btn text-white" to="/products">
                Productos
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="btn text-white" to="/discounts">
                Descuentos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
