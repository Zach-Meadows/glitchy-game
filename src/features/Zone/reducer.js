const initialState = {
    layout: 1,
    conditionMet: false
}

const zoneReducer = (state=initialState, action) => {
    switch(action.type){
        case 'CHANGE_ZONE':
            return {
                ...action.payload
            }
        default:
            return state
    }
}
export default zoneReducer