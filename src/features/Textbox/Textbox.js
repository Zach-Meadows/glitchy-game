import React from "react"
import { connect } from "react-redux"

function Textbox(props) {
    return(
        <div style={{
            display: `${props.display && props.text ? "block": "none"}`,
            position: "absolute",
            backgroundColor: "wheat",
            width: "300px",
            top: "0",
            borderRadius: "20px",
            right: "50px",
            zIndex: "5",
            opacity: 1
        }}>
            <h3 style={{
               textAlign: "center"
            }}>{props.text}</h3>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        ...state.textbox
    }
}

export default connect(mapStateToProps)(Textbox)