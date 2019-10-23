
import store from "../../config/store"

export default function textBoxAnimation() {
    clearTimeout(store.getState().textbox.timer)
    const storeText = store.getState().textbox.text

    // an attempt at resetting timer and display
store.dispatch({
    type:'CHANGE_TEXT',
    payload: {
        ...store.getState().textbox,
        display: false
    }
})
store.dispatch({
    type:'CHANGE_TEXT',
    payload: {
        ...store.getState().textbox,
        display: true
    }
})

// function to turn display to false, resetting animation
    function saveFade() {
        store.dispatch({
            type: 'CHANGE_TEXT',
            payload: {
                text: storeText,
                display: false,
                timer: undefined
            }
        })
    }
store.dispatch({
    type: "CHANGE_TEXT",
    payload: {
        ...store.getState().textbox,
    timer: setTimeout(saveFade, 5000)
}
})
//    var animateTimer = setTimeout(saveFade ,5000)
}