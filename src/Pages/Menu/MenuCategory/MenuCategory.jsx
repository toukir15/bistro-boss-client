import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items, title }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to={`/order/${title}`}>
          <button className=" border-b-4 py-2 px-4 border-b-slate-900 text-lg hover:bg-slate-900 hover:text-white transition rounded-xl">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
}
