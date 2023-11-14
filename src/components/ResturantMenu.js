import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMAGE_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, city, cloudinaryImageId, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
