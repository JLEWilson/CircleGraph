import React from "react";
import { BlockPicker } from "react-color";

const ColorPalette = (props) => {
  const [color, setColor] = React.useState(props.colors[0]);

  const handleChange = (color) => {
    setColor(color.hex);
    props.setColor(color.hex);
  };
  return (
    <BlockPicker
      color={color}
      colors={props.colors}
      onChangeComplete={(val) => handleChange(val)}
    />
  );
};

export default ColorPalette;
