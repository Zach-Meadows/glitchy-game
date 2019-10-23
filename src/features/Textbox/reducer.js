const initialState = {
    text: "You must construct additional pylons",
    display: false
}

const textReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: action.payload,
                display: action.switch
            }
        default:
            return state
    }
}

export default textReducer