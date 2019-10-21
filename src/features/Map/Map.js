import React from "react";
import Player from "../Player/Player";
import Zone from "../Zone/Zone"
import {tiles} from '../../data/maps/1/index'
import store from '../../config/store'

function Map(props) {
  store.dispatch({ type: 'ADD_TILES', payload:{
    tiles
  }})
  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        margin: "20px auto"
      }}
    >
      <Zone />
      <Player />
    </div>
  );
}

export default Map;
