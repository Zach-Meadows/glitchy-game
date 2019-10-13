import React from "react"
import playerImage from './playerImage'
import { connect } from 'react-redux'
import handleMovement from "./movement"

function Player(props){
    return (
        <div style={{
            position: "absolute",
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url(${playerImage})`,
            backgroundPosition: "0 0",
            width: "40px",
            height: "40px",
        }} />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player))