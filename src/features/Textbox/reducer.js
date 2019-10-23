const initialState = {
    text: "You must construct additional pylons",
    display: false,
    animation: 1
}

const textReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
              ...action.payload
            }
        default:
            return state
    }
}

export default textReducer