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
import ReactDOM from "react-dom";

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"This is Namaste React 🚀"),
    React.createElement("h2",{},"I'm an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag"),
      ]),
   ]);
   
   // JSX
   
   console.log(parent); // return object
   const root=ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);