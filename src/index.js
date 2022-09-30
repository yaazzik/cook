import React from "react"
import { render } from "react-dom"
import Menu from "./components/Menu";
import data from "./data/recepies";

render(
  <Menu recipes={data} />, document.getElementById("root")
)