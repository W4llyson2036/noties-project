import React from "react";
import { styled } from 'styled-components'

import '../../index.css'

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
        </StyledButton>
    )}
    
const StyledButton = styled.button`
    overflow: hidden; 
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
    
    &:hover {
        background-color: #2d2d2d; 
    }`