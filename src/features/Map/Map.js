import React from "react";
import Player from "../Player/Player";
import Zone from "../Zone/Zone"

function Map() {
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
