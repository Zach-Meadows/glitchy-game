import React from 'react'
import up from "./up.jpg"
import down from "./down.jpg"
import left from "./left.jpg"
import right from './right.jpg'
import styled from "styled-components"

const StyledRow = styled.div`
display: flex;
align-items: center;
margin: 5px auto;
`
const Control = styled.div`
width: 100px;
`

function GameInfo() {
    return(
        <div style={{
            backgroundColor: "black",
            color: "white",
            border: "solid white 5px",
            borderRadius: "5px",
            padding: '10px'
        }}>
            <h2>Controls</h2>
            <section style={{
                width: "200px"
            }}>
                Movement:
                <StyledRow><Control>Up - W or </Control><div style={{
                    backgroundImage: `url(${up})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '50px',
                    height: "50px"
                }}/></StyledRow>
                <StyledRow><Control>Down -  S or </Control><div style={{
                    backgroundImage: `url(${down})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '50px',
                    height: "50px"
                }}/></StyledRow>
                <StyledRow><Control>Left -  A or </Control><div style={{
                    backgroundImage: `url(${left})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '50px',
                    height: "50px"
                }}/></StyledRow>
                <StyledRow><Control>Right -   D or </Control><div style={{
                    backgroundImage: `url(${right})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '50px',
                    height: "50px"
                }}/></StyledRow>
                <StyledRow><Control>Interact:</Control>
                <div style={{
                    border: "solid white 3px",
                    padding: '5px',
                    margin: '5px',
                    width: "75px",
                    textAlign: 'right',
                    borderRadius: '5px'
                }}><b>ENTER</b></div></StyledRow>
            </section>
        </div>
    )
}

export default GameInfo