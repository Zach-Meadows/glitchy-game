import store from "../../config/store"

export default function handleInteraction() {
    const playerFacing = store.getState().player.facing
    const playerPosition = store.getState().player.position
    const mapInfo = store.getState().map.interact
    
    function facingNum(direction) {
        switch (direction) {
            case "UP":
                return [playerPosition[0], playerPosition[1]]
        }
    }
}