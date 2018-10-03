import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    flex: 0 0 auto;
    color: rgba(0, 0, 0, 0.54);
    padding: 12px;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
` 
const Wrapper = styled.span`
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
` 
const Img = styled.img`
    
` 
const Svg = styled.svg`
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    color: #fff;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
`

class User extends Component {
    render() {
        return (
            <Button>
                <Wrapper>
                    <Img />
                    <Svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path><path fill="none" d="M0 0h24v24H0z"></path></Svg>
                </Wrapper>
            </Button>
        )
    }
}

export default User