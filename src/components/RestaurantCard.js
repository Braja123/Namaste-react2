import { IMAGE_URL, LOGO_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#F2F2F2",
  // cursor: "pointer",
};

const RestaurantCard = ({ resName }) => {
  const {
    name,
    cloudinaryImageId: image,
    costForTwo,
    avgRatingString,
  } = resName.info;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={IMAGE_URL + image} alt="logo" />
      <h3>{name}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRatingString} stars </h3>
    </div>
  );
};

export default RestaurantCard;
