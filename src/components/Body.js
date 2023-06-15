import RestaurantCard from "./RestaurantCard"; 
import { useState } from "react";
import resList from "../utils/mockData";

function Body() {
  // Local state variable - super powerful variable 
  const [listofRestaurants, setlistofRestaurants] = useState(resList);

  // Normal js variable
  // let listofRestaurants=[
  //   {
  //     data: {
  //     id: "334475",
  //     name: "KFC",
  //     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     tags: [],
  //     costForTwo: 40000,
  //     deliveryTime: 36,
  //     avgRating : "4.4"
  //     },
  //   },
  //   {
  //     data: {
  //     id: "334476",
  //     name: "Dominos",
  //     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     tags: [],
  //     costForTwo: 40000,
  //     deliveryTime: 36,
  //     avgRating : "4.6"
  //     },
  //   },
  //   {
  //     data: {
  //     id: "334477",
  //     name: "Roti wala",
  //     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     tags: [],
  //     costForTwo: 40000,
  //     deliveryTime: 36,
  //     avgRating : "3.7"
  //     },
  //   },
  //   {
  //     data: {
  //     id: "334478",
  //     name: "Pani poori",
  //     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     tags: [],
  //     costForTwo: 40000,
  //     deliveryTime: 36,
  //     avgRating : "4.1"
  //     },
  //   },
  //   {
  //     data: {
  //     id: "334479",
  //     name: "Maghana Foods",
  //     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     tags: [],
  //     costForTwo: 40000,
  //     deliveryTime: 36,
  //     avgRating : "4.1"
  //     },
  //   },
  //   {
  //     data: {
  //     id: "334480",
  //     name: "Keshri foods",
  //     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     tags: [],
  //     costForTwo: 40000,
  //     deliveryTime: 36,
  //     avgRating : "4.2"
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          // filter logic here
          const filteredlist = listofRestaurants.filter((res) => res.data.avgRating > 4
          );
          setlistofRestaurants(filteredlist);
        } }>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

 export default Body;