import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg1 from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

export default function Menu() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={menuImg1} title={"OUR MENU"} />
      <PopularMenu />
      <Cover img={menuImg1} title={"OUR MENU"} />
      <PopularMenu />
      <Cover img={menuImg1} title={"OUR MENU"} />
      <PopularMenu />
    </div>
  );
}
