import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  );
}
