import { LOGO_LINK } from "../utils/constants";

const ItemCard = (props) =>
{
  const { name, cloudinaryImageId, costForTwo, avgRating, cuisines, locality } =
    props.itemData.info;
  return (
    <div className="item-div">
      <div className="item-logo-div">
        <img
          className="item-logo"
          src={LOGO_LINK+cloudinaryImageId}
          alt={name}
        />
      </div>
      <h3>{name}</h3>
      <p>{locality}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>Rating: {avgRating}</p>
    </div>
  );
};

export default ItemCard;