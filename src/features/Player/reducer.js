const initialState = {
    position: [0, 0],
    facing: "DOWN",
    controls: true
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return {
                ...action.payload
            }
        case 'CHANGE_FACING':
            return {
                ...action.payload
            }
        case 'TOGGLE_CONTROLS':
            return {
                controls: action.payload
            }
        default:
            return state
    }
}

export default playerReducer