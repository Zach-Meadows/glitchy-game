import React from "react";
import Player from "../Player/Player";
import Zone from "../Zone/Zone"
import {tiles, interact} from '../../data/maps/1/index'
import store from '../../config/store'

function Map(props) {
  store.dispatch({ type: 'ADD_TILES', payload:{
    interact,
    tiles
  }})
  return (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        margin: "20px auto"
      }}
    >
      <Zone />
      <Player />
    </div>
  );
}

export default Map;
