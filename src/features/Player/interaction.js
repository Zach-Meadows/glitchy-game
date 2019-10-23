import store from "../../config/store";
import { spriteSize, mapSize } from "../../config/constants";

export default function handleInteraction() {
  /* set variable for state info that will be changed,
   ** or used for calculations
   */
  const playerFacing = store.getState().player.facing;
  const playerPosition = store.getState().player.position;
  const mapInfo = store.getState().map.interact;

  /* function that defines which interaction element we will interact
   ** with in reference to the player
   */
  function facingNum(direction) {
    switch (direction) {
      case "UP":
        return [playerPosition[0], playerPosition[1] - spriteSize];
      case "DOWN":
        return [playerPosition[0], playerPosition[1] + spriteSize];
      case "LEFT":
        return [playerPosition[0] - spriteSize, playerPosition[1]];
      case "RIGHT":
        return [playerPosition[0] + spriteSize, playerPosition[1]];
    }
  }
  /* converts array numbers from facingNum() to single digits to be used
   ** with interaction state
   */
  function convertToMatrixNums(arr) {
    if (
      arr[0] < 0 ||
      arr[1] < 0 ||
      arr[0] > mapSize - spriteSize ||
      arr[1] > mapSize - spriteSize
    ) {
      return undefined;
    } else {
      return [arr[0] / spriteSize, arr[1] / spriteSize];
    }
  }

  const interactionSpot = convertToMatrixNums(facingNum(playerFacing));
  const visible = store.getState().textbox.display;

  store.dispatch({
    type: "CHANGE_TEXT",
    payload: {
      text: interactionSpot === undefined
          ? "You can't escape."
          : mapInfo[interactionSpot[1]][interactionSpot[0]],
      display: visible,
      animation: 1
    }
  });

  const currentText = store.getState().textbox.text;

  return store.dispatch({
    type: "CHANGE_TEXT",
    payload: {
      text: currentText,
      display: currentText ? !visible : false,
      animation: 1
    }
  });
}
