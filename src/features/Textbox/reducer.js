const initialState = {
    text: "You must construct additional pylons",
    display: false,
    timer: undefined 
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