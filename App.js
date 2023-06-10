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
   
   
  //  console.log(parent); // return object
  //  const root=ReactDOM.createRoot(document.getElementById("root"));
  //  root.render(parent);


   /**Laying the foundation
    *
    * React.createElement => ReactElemet - Js object => HTMLElement(render)
    * 
    */

  
   const heading = React.createElement("h1",
   {id: "heading"},
   "Namaste React 🚀");

  
   // JSX => is not HTML in js but its looks HTML-Like or XML-like syntax 
   // JSX (code transpiled before it reaches the js) - PARCEL - Babel(this is a normal package which converts jsx to react code)
   // JSX => Bables transpiled it to React.createElement => ReactElemet - Js object => HTMLElement(render)

   // React Element
   const jsxheading= (
   <h1 className="heading" tabIndex="5">
    Namaste React using JSX 🚀</h1> 
   );
  
   /**
    * React Component
    * 1. class based component - Old way to write the code
    * 2. functional component - New way to write the code
    * 
    * 
    */

   // React functional Component - is a function that return some piece of jsx
   const Headingcomponent = () => {
      return <h1 className="heading">Namaste React functional component</h1>;
   };

   // OR

   const Headingcomponent2 = () => (
     <h1 className="heading">Namaste React functional component</h1>
   );
   

   // component composition
   const Title = () => {
       return <h1>My Name is Akash</h1>;
   };

   const Keshri  = () => (
      <div id="container">  
        <Title /> 
        <h1>I'm a software developer</h1>
      </div>
   ); 
   // we can <Title /> or <Title></Title> or {Title()}

   // How I put React Element inside my React component...
   const Name = () => (
    <div id="container">
          {jsxheading}
          <h1>I'm a software developer</h1>
      </div>  
   );

   // How I put React Element inside React Element...
   const elem = <h1>React Element</h1>
   const style = (
     <div id="container">
     <h1>Namaste React 🚀</h1>
     {elem}
     </div>
   );
   
   // React Fragment - behave like an empty tag..
   const Ram = () => (
    <React.Fragment>
     <div id="container">
      <Title />
      <h1 className="heading">Namaste</h1>
        </div>
        <div id="container2">
      </div>
     </React.Fragment>
   );

   const root = ReactDOM.createRoot(document.getElementById("root"));

   root.render(<Ram />);



