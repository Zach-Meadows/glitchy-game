import store from "../../config/store";
import { spriteSize, mapSize } from "../../config/constants";
import handleInteraction from "./interaction";

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

  function checkMap(newPos) {
    return newPos[0] >= 0 &&
      newPos[0] <= mapSize - spriteSize &&
      (newPos[1] >= 0 && newPos[1] <= mapSize - spriteSize)
      ? true
      : false;
  }

  function checkObstacles(newPos) {
    const obstacle = store.getState().map.tiles[newPos[1] / spriteSize][
      newPos[0] / spriteSize
    ];
    return obstacle === 0 || obstacle === 9 || obstacle === 8? true : false;
  }

  function dispatchMove(direction) {
    const oldPos = store.getState().player.position;
    const newPos = getNewPos(direction);
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        ...store.getState().player,
        position: checkMap(newPos) && checkObstacles(newPos) ? newPos : oldPos
      }
    });
  }
  // function to change the state of where the player is
  function dispatchFacing(direction) {
    store.dispatch({
      type: "CHANGE_FACING",
      payload: {
        ...store.getState().player,
        facing: direction
      }
    });
  }
  // check if player meets conditions to go to next zone,
  // otherwise move the player
  function checkNextZone(direction) {
    const mapRules = store.getState().map.rules
    mapRules(direction)
    const metReq = store.getState().zone.conditionMet
    const currentPosition = store.getState().player.position
    const standingOn = store.getState().map.tiles[currentPosition[1]/spriteSize][currentPosition[0]/spriteSize]
    if (standingOn === 9 && direction === store.getState().map.exit[0] && metReq) {
      store.dispatch({
        type: "CHANGE_ZONE",
        payload: {
          ...store.getState().zone,
          conditionMet: false,
          layout: store.getState().zone.layout + 1
        }
      })
      store.dispatch({
        type: "MOVE_PLAYER",
        payload: {
          ...store.getState().player,
          position: [store.getState().map.playerPos[0][0] * 80, store.getState().map.playerPos[0][1] * 80]
        }
      })
    } else if(standingOn === 8 && direction === store.getState().map.exit[1] && metReq){
      store.dispatch({
        type: "CHANGE_ZONE",
        payload: {
          ...store.getState().zone,
          conditionMet: false,
          layout: store.getState().zone.layout - 1
        }
      })
      store.dispatch({
        type: "MOVE_PLAYER",
        payload: {
          ...store.getState().player,
          position: [store.getState().map.playerPos[1][0] * 80, store.getState().map.playerPos[1][1] * 80]
        }
      })
    } else {
      dispatchMove(direction);
    }
  }
// event listener func for directional controls
  function handleKeyPress(evt) {
    
    //added condition to only move if textbox isn't up
    const textDisplay = store.getState().textbox.display
    if (!textDisplay) {
      evt.preventDefault();
    switch (evt.keyCode) {
      case 37:
      case 65:
        dispatchFacing("LEFT");
        return checkNextZone("LEFT");
      case 38:
      case 87:
        dispatchFacing("UP");
        return checkNextZone("UP");
      case 39:
      case 68:
        dispatchFacing("RIGHT");
        return checkNextZone("RIGHT");
      case 40:
      case 83:
        dispatchFacing("DOWN");
        return checkNextZone("DOWN");
      default:
        console.log(evt.keyCode);
      }
    }
  }
  // event listener for movement
  window.addEventListener("keydown", handleKeyPress);
  // event listener for interact
  window.addEventListener("keyup", evt => {
    const text = store.getState().textbox.text
    const currentText = store.getState().textbox.currentText
    const textboxUp = store.getState().textbox.display
    //added a if function to fill up all text if player hits enter while the textbox is typing.
    if (evt.keyCode === 13 && text != currentText && textboxUp) {
      store.dispatch({
        type: "CHANGE_TEXT",
        payload: {
          ...store.getState().textbox,
          currentText: text
        }
      })
    }
    else if (evt.keyCode === 13 && 
      ((textboxUp && text === currentText) || !textboxUp)) {
      return handleInteraction(evt.keyCode);
    }
  });

  return player;
}
