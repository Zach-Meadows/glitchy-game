import React from "react"
import { connect } from "react-redux"
import styled, { keyframes } from 'styled-components'

const fade = keyframes`
0% {
    opacity: 1;
}
50% {
    opacity: 1;
}
100% {
    opacity: 0;
}
`
const FadeBox = styled.div`
position: absolute;
background-color: wheat;
width: 300px;
top: 0;
border-radius: 20px;
right: 50px;
z-index: 5;
opacity: 0;
animation: ${fade} 5s ease-in;
`
function Textbox(props) {
    return(
        <>
        {props.display && props.text ? 
        <FadeBox >
            <h3 style={{
               textAlign: "center"
            }}>{props.text}</h3>
        </FadeBox>
        : null
    }
        </>
    )
}
function mapStateToProps(state) {
    return {
        ...state.textbox
    }
}

export default connect(mapStateToProps)(Textbox)