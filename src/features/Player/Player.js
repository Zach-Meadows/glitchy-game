import React from "react";
import playerImage from "./playerImage.jpg";
import { connect } from "react-redux";
import handleMovement from "./movement";

function facingNum(direction) {
  switch (direction) {
    case "LEFT":
      return 6;
    case "RIGHT":
      return 73;
    case "UP":
      return 156;
    case "DOWN":
      return 224;
    default:
      return 224;
  }
}

function Player(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${playerImage})`,
        backgroundPosition: `${facingNum(props.facing)}px -15px`,
        backgroundSize: "290px",
        width: "80px",
        height: "80px"
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(handleMovement(Player));
