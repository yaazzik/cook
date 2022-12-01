import Menu from "./components/Menu";
import data from "./data/recepies";
import StarRating from "./components/RatingSys/StarRating";
import {useState} from "react";
import colorData from './data/color-data.json'
import ColorList from "./components/ColorList";

function App() {
  const [ colors, setColors ] = useState(colorData)
  return (
    <ColorList colors={colors}
    onRemoveColor={id => {
      const newColors  = colors.filter( color => color.id !== id);
      setColors(newColors);
    }}/>
  );
}

export default App;
