import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav d-flex flex-row justify-content-center w-100">
            <li className="nav-item mx-2">
              <Link className="btn" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="btn" to="/products">
                Productos
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="btn" to="/discounts">
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
