import "../styles/Swatch.css";
import React from "react";
import { SketchPicker } from "react-color";

const ColorSwatch = (props) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);
  const [color, setColor] = React.useState(props.color);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.hex);
    props.setColor(color.hex);
  };

  const styles = {
    container: {
      marginBottom: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    color: {
      width: "36px",
      height: "20px",
      borderRadius: "2px",
      background: `${color}`,
    },
    swatch: {
      padding: "10px",
      background: "#fff",
      height: "20px",
      borderRadius: "1px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer",
      marginRight: "1em",
    },
    popover: {
      position: "absolute",
      top: "60px",
      right: "0px",
      zIndex: "2",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.swatch} onClick={() => handleClick()}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker
            color={color}
            onChange={(color) => handleChange(color)}
          />
        </div>
      ) : null}
      <button className="button" type="button" onClick={() => props.submit()}>
        Add Color
      </button>
    </div>
  );
};

export default ColorSwatch;
