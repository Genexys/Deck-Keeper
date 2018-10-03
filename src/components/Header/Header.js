import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './MenuBtn'
import Search from './Search'
import User from './User'
import Navigation from './Navigation'

const Main = styled.header`
    width: 100%;
    display: flex;
    z-index: 1100;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;
    color: #fff;
    background-color: #2196f3;
}
`
const Wrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    min-height: 56px;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 600px) {
        min-height: 64px;
        padding-left: 24px;
        padding-right: 24px;
    }

    @media (min-width: 0px) and (orientation: landscape) {
        min-height: 48px;
    }
`
const WrapperLeft = styled.div`
    margin-left: auto;
`

class Header extends Component {
    constructor () {
        super();
        this.state = {
            activeMenu: false
        }
    }
    
    openMenu = (data) => {
        this.setState({ activeMenu: data })
    }
    render() {
        return (
            <Main>
                <Wrapper>
                    
                    <Button openMenu={this.openMenu}/>
                    <Navigation active={this.state.activeMenu}/>
                    <Search />
                    <WrapperLeft>
                        <User />
                    </WrapperLeft>
                </Wrapper>
            </Main>
        )
    }
}

export default Header