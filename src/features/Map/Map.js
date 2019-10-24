import React from "react";
import Player from "../Player/Player";
import Zone from "../Zone/Zone"
import Textbox from "../Textbox/Textbox"
import store from '../../config/store'
import {connect} from 'react-redux'
import {mapArray} from "../../data/maps/mapdata"


function Map(props) {
  const mapData = props.layout

  store.dispatch({ type: 'ADD_TILES', payload:{
    ...mapArray[mapData - 1]
  }})
  return (
    <div
      style={{
        borderRadius: "5px",
        border: "solid white 5px",
        position: "relative",
        display: 'flex',
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
