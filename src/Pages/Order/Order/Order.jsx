import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../components/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
export default function Order() {
  const categories = ["salad", "soups", "pizza", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [index, setIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={orderCoverImg} title={"ORDER FOOD"} />
      <div className="flex justify-center mt-10">
        <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Soups</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salads}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
