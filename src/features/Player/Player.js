import React from "react"
import playerImage from './playerImage.jpg'
import { connect } from 'react-redux'
import handleMovement from "./movement"

function Player(props){
    return (
        <div style={{
            position: "absolute",
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url(${playerImage})`,
            backgroundPosition: `${props.facing}px -15px`,
            backgroundSize: '290px',
            width: "80px",
            height: "80px",
        }} />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player))