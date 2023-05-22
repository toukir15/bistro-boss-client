export default function MenuItem({ item }) {
  const { image, name, recipe, price } = item;
  const customStyle = {
    borderRadius: "0 100px 100px 100px",
  };
  return (
    <div className="flex">
      <img
        style={customStyle}
        className="w-[100px] object-fill mr-4"
        src={image}
        alt=""
      />
      <div>
        <h5 className="text-xl font-medium">{name}</h5>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
}
