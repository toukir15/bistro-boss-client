import FoodCard from "../../../components/FoodCard";

export default function OrderTab({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
}
