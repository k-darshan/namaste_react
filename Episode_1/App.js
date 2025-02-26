const header    = React.createElement("h1", {"id":"header", "className":"header"}, "hello bro");
const root1     = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(header);  

//nested create elements
const Parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ])
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(Parent);
