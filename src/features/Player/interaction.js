import store from "../../config/store"
import {spriteSize, mapSize} from "../../config/constants"

export default function handleInteraction() {
    const playerFacing = store.getState().player.facing
    const playerPosition = store.getState().player.position
    const mapInfo = store.getState().map.interact
    
    function facingNum(direction) {
        switch (direction) {
            case "UP":
                return [playerPosition[0], playerPosition[1] - spriteSize]
            case "DOWN":
                return [playerPosition[0], playerPosition[1] + spriteSize]
            case "LEFT":
                return [playerPosition[0] - spriteSize, playerPosition[1]]
            case "RIGHT":
                return [playerPosition[0] + spriteSize, playerPosition[1]]
        }
    }
    function convertToMatrixNums(arr) {
        if (arr[0] < 0 || arr[1] < 0 || arr[0] > mapSize - spriteSize || arr[1] > mapSize - spriteSize) {
            return undefined
        } else{
            return [arr[0]/spriteSize, arr[1]/spriteSize]
        }
    }

   
    const interactionSpot = convertToMatrixNums(facingNum(playerFacing)) 
    const visible = store.getState().text.display
   return store.dispatch({
        type: "CHANGE_TEXT",
        payload: interactionSpot === undefined ? "You can't escape." : mapInfo[interactionSpot[1]][interactionSpot[0]],
        switch: !visible
    })
   
    
    
}