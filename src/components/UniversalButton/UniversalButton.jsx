import React        from "react";
import { styled }   from 'styled-components';

import '../../index.css';

export function UniversalButton(props) {
    return (
        <StyledButton 
            bg={props.bg} 
            width={props.width}
            padding={props.padding}
            margin={props.margin}
            onClick={props.click} 
        >
            {props.value}
            {props.value === "review" && (
                <CountAvailableCard>
                    {props.totalCardAvailable > 100 ? '99+' : props.totalCardAvailable}
                </CountAvailableCard>
            )}
        </StyledButton>
    )}
    
const StyledButton = styled.button`
    white-space: nowrap;
    text-overflow: ellipsis; 
    display: block;
    margin: ${props => props.margin};
    color: white;
    cursor: pointer;
    padding: ${props => props.padding};
    font-size: 1rem;
    border-radius: 0.5rem;
    background-color: ${props => props.bg};
    width: ${props => props.width.includes('%') ? props.width : props.width + 'px'};
    position: relative;

    &:hover {
        background-color: #2d2d2d; 
    }`

const CountAvailableCard = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border: 1px solid black;

    top: -5px;
    right: -5px;
    background-color: #ffffff;
    font-size: 0.8rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
`