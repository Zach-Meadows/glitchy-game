import React from "react";
import Player from "../Player/Player";
import Zone from "../Zone/Zone"
import Textbox from "../Textbox/Textbox"
import {tiles as tiles1, interact as interact1} from '../../data/maps/1/index'
import {tiles as tiles2, interact as interact2} from '../../data/maps/2/index'
import store from '../../config/store'
import {connect} from 'react-redux'


function Map(props) {
  const mapData = props.layout
  function checkZone(zone) {
    switch(zone){
      case 1:
        return [tiles1, interact1]
      case 2:
        return [tiles2, interact2]
    }
  }
  store.dispatch({ type: 'ADD_TILES', payload:{
    interact: checkZone(mapData)[1],
    tiles: checkZone(mapData)[0]
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
      <Textbox/>
      <Zone />
      <Player />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    ...state.zone
  }
}

export default connect(mapStateToProps)(Map);
