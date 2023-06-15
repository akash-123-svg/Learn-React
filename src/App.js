/**
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm an h1 tag</h1>
 *         <h2>I'm an h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *         <h1>I'm an h1 tag</h1>
 *         <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(object) => HTML(Browser understands)
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const Applayout = () => {
   return (
     <div className="app">
        <Header />
        <Body />
     </div>
   );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);





/**
 * const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334475",
      name: "KFC",
      uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
      city: "1",
      area: "BTM Layout",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
    },
      slugs: {
        restaurant: "kfc-btm-layout-btm",
@@ -1955,28 +1883,4 @@
  },
];
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
