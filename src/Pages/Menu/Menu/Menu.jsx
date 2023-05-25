import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg1 from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

export default function Menu() {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={menuImg1} title={"OUR MENU"} />

      {/* offered menu  */}
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu  */}
      <div className="my-10">
        <Cover img={dessertImg} title={"DESSERTS"}></Cover>
      </div>
      <MenuCategory title={"desserts"} items={dessert} />

      {/* pizza menu  */}
      <div className="my-10">
        <Cover img={pizzaImg} title={"PIZZA"}></Cover>
      </div>
      <MenuCategory title={"pizza"} items={pizza} />

      {/* salads menu  */}
      <div className="my-10">
        <Cover img={saladsImg} title={"SALADS"}></Cover>
      </div>
      <MenuCategory title={"salads"} items={salads} />

      {/* salads menu  */}
      <div className="my-10">
        <Cover img={soupImg} title={"SOUPS"}></Cover>
      </div>
      <MenuCategory title={"soups"} items={soups} />
    </div>
  );
}
