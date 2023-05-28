import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";

export default function MyCart() {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="uppercase flex justify-between">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: {total}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cart, index) => (
              <tr key={cart._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cart.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cart.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>

                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
