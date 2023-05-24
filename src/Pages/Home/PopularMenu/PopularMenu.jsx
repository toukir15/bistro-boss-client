import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
// import useMenu from "../../../Hooks/useMenu";

export default function PopularMenu() {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data.filter(
  //         (singleMenu) => singleMenu.category === "popular"
  //       );
  //       setMenu(popularItem);
  //     });
  // }, []);
  const [menu] = useMenu();
  console.log(menu);
  const popular = menu?.filter((item) => item?.category === "popular");

  return (
    <section className="py-10">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}
