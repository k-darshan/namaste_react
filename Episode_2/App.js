import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parentID", className: "parentClass" },
    React.createElement(
        "div",
        { id: "childID", className: "childClass" }, 
        React.createElement("h1", { id: "header1" }, "DARSHAN"),
        React.createElement("h1", { id: "header2" }, "DARSHAN2"),
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
