import store from "../../config/store";
import { spriteSize, mapSize } from "../../config/constants";


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

  function checkMap(oldPos, newPos) {
    
    return (newPos[0] >= 0 && newPos[0] <= mapSize - spriteSize) &&
           (newPos[1] >= 0 && newPos[1] <= mapSize - spriteSize)
           ? true : false
  }

  function checkObstacles(newPos) {
    const obstacle = store.getState().map.tiles[newPos[1]/spriteSize][newPos[0]/spriteSize]
    return obstacle === 0 ? true : false
  }

  function dispatchMove(direction) {
    const oldPos = store.getState().player.position
    const newPos = getNewPos(direction)
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: checkMap(oldPos,newPos) && checkObstacles(newPos) ? newPos : oldPos
      }
    });
  }

  function facingDirection(direction) {
    switch (direction) {
      case "<":
        return 6
      case ">":
        return 73 
      case "^":
        return 156
      case "V":
        return 224
        
    }
  }
  function dispatchFacing(direction) {
    const oldPos = store.getState().player.position
    store.dispatch({
      type: "CHANGE_FACING",
      payload : {
        position: oldPos,
        facing: facingDirection(direction)
      }
    })
  }
  function handleKeyPress(evt) {
    evt.preventDefault();
    switch (evt.keyCode) {
      case 37:
      case 65:
          dispatchFacing("<")
        return dispatchMove("LEFT");
      case 38:
      case 87:
          dispatchFacing("^")
        return dispatchMove("UP");
      case 39:
      case 68:
          dispatchFacing(">")
        return dispatchMove("RIGHT");
      case 40:
      case 83:
        dispatchFacing("V")
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
