import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag 👨"),
    React.createElement("h1", {}, "I am another h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "I am h2 tag"),
    React.createElement("h2", {}, "I am another h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "das" },
  "Hello welcome to React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
