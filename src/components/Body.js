import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.439084&lng=78.447369&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();

    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickData = () => {
    const resList1 = resList.filter((res) => {
      return res.star > 4;
    });
    setResList(resList1);
  };

  if (!onlineStatus) {
    return <h2>Looks like you are offline</h2>;
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              let filteredResturant = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilterList(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button className="filter-btn" onClick={clickData}>
            Top Rated Resturant
          </button>
        </div>
      </div>

      <div className="res-container">
        {filterList?.map((res) => {
          // console.log(res);
          return (
            <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
              <RestaurantCard resName={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
