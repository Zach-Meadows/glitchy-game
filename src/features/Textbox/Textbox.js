import React from "react"
import { connect } from "react-redux"
import styled, { keyframes } from 'styled-components'

const FadeBox = styled.div`
border: solid white 2px;
justify-self: center;
position: absolute;
align-self: center;
background-color: wheat;
width: 300px;
border-radius: 20px;
right: 50px;
z-index: 5;
opacity: 1;
box-shadow: 12px 12px rgba(0,0,0,0.3);
`
function Textbox(props) {
    return(
        <>
        {props.display && props.text ? 
        <FadeBox >
            <h3 style={{
               textAlign: "center"
            }}>{props.text}</h3>
            <p style={{
                textAlign: "right",
                paddingRight: "10px"
            }}>Press <b>Enter</b> ></p>
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