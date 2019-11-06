import React from "react";
import store from "../../config/store";
import { connect } from "react-redux";
import styled from "styled-components";

const FadeBox = styled.div`
  padding: 5px;
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
  box-shadow: 12px 12px 0.4rem rgba(0, 0, 0, 0.3);
`;
const AnimatedText = styled.h3`
  text-align: left;
  padding: 0 10px;
`;

const PressEnter = styled.p`
  text-align: right;
  padding-right: 10px;
`;

function TypeTimer() {
  let fullText = store.getState().textbox.text;
  let textAnimation = store.getState().textbox.currentText;
  if (textAnimation.length < fullText.length && textAnimation != fullText) {
    store.dispatch({
      type: "CHANGE_TEXT",
      payload: {
        ...store.getState().textbox,
        currentText: textAnimation + fullText[textAnimation.length]
      }
    });
  }

}
function Timer(props) {
    setTimeout(TypeTimer, 70)
    return <AnimatedText>{props.currentText}</AnimatedText>
}

function Textbox(props) {
    if (!props.display) {
        store.dispatch({
            type: "CHANGE_TEXT",
        payload: {
          ...store.getState().textbox,
          currentText: ""
        }
        })
    }
  return (
    <>
      {props.display && props.text ? (
        <FadeBox>
          {Timer(props)}
          <PressEnter>
            Press <b>Enter</b> >
          </PressEnter>
        </FadeBox>
      ) : null}
    </>
  );
}
function mapStateToProps(state) {
  return {
    ...state.textbox
  };
}

export default connect(mapStateToProps)(Textbox);
