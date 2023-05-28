import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { BsFillCartCheckFill } from "react-icons/bs";
import useCart from "../../../Hooks/useCart";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogout = () => {
    logout();
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Items</Link>
      </li>
      <li>
        <Link to="/dashboard">Order Items</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <BsFillCartCheckFill className="text-2xl" />
            <div className="badge">+{cart.length || 0}</div>
          </button>
        </Link>
      </li>
      <li>
        <Link to="/secrete">Secrete</Link>
      </li>
      <li>
        {user ? (
          <>
            <Link>
              <button onClick={handleLogout} className="btn btn-active">
                Logout
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="login">
              <button className="btn btn-active">Login</button>
            </Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 text-white bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
}
