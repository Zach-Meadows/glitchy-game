import store from "../../config/store";
import { spriteSize } from "../../config/constants";

export default function handleMovement(player) {
  function getNewPos(direction) {
      const oldPos = store.getState().player.position;
    switch (direction) {
      case "UP":
        return [oldPos[0], oldPos[1] - spriteSize];
      case "DOWN":
        return [oldPos[0], oldPos[1] + spriteSize];
      case "LEFT":
        return [oldPos[0] - spriteSize, oldPos[1]];
      case "RIGHT":
        return [oldPos[0] + spriteSize, oldPos[1]];
    }
  }

  function dispatchMove(direction) {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: getNewPos(direction)
      }
    });
  }
  function handleKeyPress(evt) {
    evt.preventDefault();
    switch (evt.keyCode) {
      case 37:
      case 65:
        return dispatchMove("LEFT");
      case 38:
      case 87:
        return dispatchMove("UP");
      case 39:
      case 68:
        return dispatchMove("RIGHT");
      case 40:
      case 83:
        return dispatchMove("DOWN");
      default:
        console.log(evt.keyCode);
    }
  }
  window.addEventListener("keydown", evt => {
    handleKeyPress(evt);
  });
  return player;
}
