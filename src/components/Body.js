import { useState } from "react";
import restaurants from "../utils/dummyData";
import ItemCard from "./ItemCard";
import { useState } from "react";
const Body = () =>
{
    //local state variable where assigning data 
    const [listOfRestaurant, setListOfRestaurant ] = useState(restaurants);
  return (
    <div id="body-conatiner">
      <div className="search_div">
        <button
          className="filterBtn1"
          onClick={() => {
            const filterData1 = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurant(filterData1);
          }}
        >
          Top rated restaurants
        </button>
        <button
          className="filterBtn2"
          onClick={() => {
            const filterData2 = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating <= 4
            );
            setListOfRestaurant(filterData2);
          }}
        >
          Average rated restaurants
        </button>
      </div>
      <div className="item-container">
        {listOfRestaurant.map((restaurant) => (
          <ItemCard key={restaurant.info.id} itemData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
