import { Link, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { GiPresent } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import useCart from "../Hooks/useCart";

export default function Dashboard() {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="">
              <AiFillHome />
              <a>User Home</a>
            </Link>
          </li>
          <li>
            <Link to="">
              <GiPresent />
              <a>Reservation</a>
            </Link>
          </li>
          <li>
            <Link to="">
              <MdOutlinePayment />
              <a>Payment History</a>
            </Link>
          </li>
          <li>
            <Link to="">
              <AiOutlineShoppingCart />
              <a>My Cart</a> <div className="badge">+{cart.length || 0}</div>
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="">
              <AiOutlineShoppingCart />
              <a>Home</a>
            </Link>
          </li>{" "}
          <li>
            <Link to="">
              <AiOutlineShoppingCart />
              <a>My Cart</a>
            </Link>
          </li>{" "}
          <li>
            <Link to="">
              <AiOutlineShoppingCart />
              <a>My Cart</a>
            </Link>
          </li>{" "}
          <li>
            <Link to="">
              <AiOutlineShoppingCart />
              <a>My Cart</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
