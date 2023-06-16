import RestaurantCard from "./RestaurantCard"; 
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

function Body() {
  // Local state variable - super powerful variable 
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant] = useState([]);

  // whenever state variable update, react triggers a reconcliation cycle (re-renders the component)
  const [searchText,setsearchText] = useState("");
    // OR

  /**
   * const arr=useState(resList);
   * const listofRestaurants=arr[0];
   * const setlistofRestaurants=arr[1];
   * 
   */
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData= async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6236338&lng=76.8057776&page_type=DESKTOP_WEB_LISTING"
    );

    const json= await data.json();

    console.log(json);
   
    // optinal chaining (?)
    setlistofRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };
   

  // conditional rendering
  if(listofRestaurants.length===0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) =>{
               setsearchText(e.target.value);
          }}>
          </input>
          <button onClick={() =>{
            // filter the resturants cards and update the UI
            // sarchText
            const filteredRestaurant=listofRestaurants.filter(
              (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
           setfilteredRestaurant(filteredRestaurant);
             
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          // filter logic here
          const filteredlist = listofRestaurants.filter((res) => res.data.avgRating > 4
          );
          setlistofRestaurants(filteredlist);

        } }>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

 export default Body;