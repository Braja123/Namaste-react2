import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMAGE_URL, MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    // const data = await fetch(
    //   MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    // );
    const json = await data.json();
    console.log(json?.data);
    // setResInfo(json?.data?.cards[0]?.card?.card?.info);
    setResInfo(json?.data);
    // setResInfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  // console.log("resInfo", resInfo?.cards[0]?.card?.card?.info);

  const { name, city, cloudinaryImageId, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  // console.log("itemCards", itemCards);

  return (
    <div className="menu">
      <img src={IMAGE_URL + cloudinaryImageId} alt="image" />
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h3>{costForTwoMessage}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - RS.
              {item?.card?.info?.defaultPrice / 1000 ||
                item?.card?.info?.price / 1000}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
