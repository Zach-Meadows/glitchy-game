
import store from "../../config/store"

export default function textBoxAnimation() {
    const storeText = store.getState().textbox.text

    function saveFade() {
        store.dispatch({
            type: 'CHANGE_TEXT',
            payload: {
                text: storeText,
                display: false,
            }
        })
    }

    setTimeout(saveFade ,3000)
}