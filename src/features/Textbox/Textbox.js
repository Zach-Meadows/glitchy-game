import React from "react"
import { connect } from "react-redux"

function Textbox(props) {
    return(
        <div style={{
            display: `${props}`,
            position: "absolute",
            backgroundColor: "wheat",
            width: "300px",
            top: "0",
            borderRadius: "20px",
            right: "50px",
            zIndex: "5"
        }}>
            <h3 style={{
               textAlign: "center"
            }}>it's a rock</h3>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        ...state.map
    }
}

export default connect(mapStateToProps)(Textbox)