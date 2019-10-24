import React from "react";
import { spriteSize } from "../../config/constants";
import rock from "../../data/images/rock.jpg";
import tree from "../../data/images/tree.png";
import grass from "../../data/images/grass-patch.jpg";
import pebble from "../../data/images/pebble.jpg";
import bush from "../../data/images/bush.jpg"
import cone from "../../data/images/cone.jpg"
import bag from "../../data/images/bag.jpg"
import sign from "../../data/images/sign.jpg"
import { connect } from "react-redux";

function getTileImage(num) {
  switch (num) {
    case 1:
      return rock;
    case 2:
      return tree;
    case 3:
      return bush;
    case 4:
      return cone;
    case 5:
      return bag;
    case 6:
      return sign;
    default:
      // randomly generate a patch of grass or a pebble
      const image = Math.floor(Math.random() * 2);
      if (image === 0) {
        return grass;
      } else {
        return pebble;
      }
  }
}

function Tile(props) {
  return (
    <div
      style={{
        margin: 0,
        backgroundImage: `url("${getTileImage(props.value)}")`,
        backgroundColor: "rgb(170,169,165)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "inline-flex",
        height: spriteSize,
        width: spriteSize,
        boxShadow: "0 0 2px 2px rgb(151,152,147) inset"
      }}
    ></div>
  );
}

function Zone(props) {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: "green"
      }}
    >
      {props.tiles.map((row, i) => (
        <div style={{ height: spriteSize }} key={i}>
          {row.map((tile, j) => {
            return <Tile value={tile} key={j} />;
          })}
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles
  };
}
export default connect(mapStateToProps)(Zone);
