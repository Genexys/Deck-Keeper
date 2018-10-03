import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    /* background-color: #2A2A2C; */
    border-radius: 0px;
    border: none;
    color: #FFF;
    height: 48px;
    margin: 0px;
    min-height: 48px;
    min-width: 48px;
    padding: 0px;
    width: 48px;
    align-self: center;
    transition: all 0.3s;

    &:hover, 
    &:focus,
    &:active {
        outline: none;
  }
`
const Bar = styled.span`
  background-color: ${props => props.active ? "transparent" : "#FFF"};
  width: 24px;
  height: 3px;
  margin: 4px auto;
  border-radius: 3px;
  display: block;
  position: relative;
  transition: all ${props => props.active ? ".3s" : ".2s"};
  backface-visibility: hidden;
  &::before,
  &::after {
    content: '';
    background-color: #FFF;
    border-radius: 3px;
    width: ${props => props.active ? "28px" : "24px"};
    height: 3px;
    margin: 4px auto;
    position: absolute;
    transition: all 0.3s;
    backface-visibility: hidden;
  }
  &:before {
    top: -12px;
    left: ${props => props.active ? "1px" : "0px"};
    transform: ${props => props.active ? "rotate(45deg) translate(4px, 9px)" : ""};
  }
  &:after {
    bottom: -12px;
    left: ${props => props.active ? "1px" : "0px"};
    transform: ${props => props.active ? "rotate(-45deg) translate(3px, -7px)" : ""};
  }
`

class MenuButton extends Component {
    constructor () {
        super();
        this.state = {
            activeMenu: false
        }
    }

    componentDidMount () {
        if (this.props.activeMenu) {
            this.setState({
                activeMenu: true
            });
        }
    }
    toggle () {
        this.props.openMenu(!this.state.activeMenu)
        this.setState({
            activeMenu: !this.state.activeMenu
        });
    }

    render() {
        return(
            <Button onClick={this.toggle.bind(this)}>
                <Bar active={this.state.activeMenu}/>
            </Button>
            
        )
    }
}

export default MenuButton
