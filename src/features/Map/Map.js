import React from "react";
import Player from "../Player/Player";
import Zone from "../Zone/Zone"

function Map() {
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
