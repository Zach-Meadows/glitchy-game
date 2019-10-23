import React from "react";
import { spriteSize } from "../../config/constants";
import rock from "../../data/images/rock.png";
import tree from "../../data/images/tree.png";
import { connect } from 'react-redux'

function getTileImage(num) {
  switch (num) {
    case 0:
      return ''
    case 1:
      return rock;
    case 2:
      return tree;
    default:
      return ''
  }
}



function Tile(props) {
  return <div style={{
    margin: 0,
    backgroundImage: `url("${getTileImage(props.value)}")`,
    backgroundColor: 'green',
    backgroundPosition: 'center',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: 'inline-flex',
    height: spriteSize,
    width: spriteSize,
  }}></div>;
}

function Zone(props) {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: "green",
      }}
    >
      {props.tiles.map((row, i)=> (
        <div style={{height: spriteSize}} key={i}>
          {row.map((tile, j)=> {
           return <Tile value={tile} key={j} />
          }
          )}
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  } 
}
export default connect(mapStateToProps)(Zone);
