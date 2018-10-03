import React, { Component } from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    display: ${props => props.active ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    
`
const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
`
const Item = styled.li`
    &:not(:first-child) {
        margin-left: 10px;
    }
`
const Link = styled.a`
    
`
class Navigation extends Component {
    render() {
        console.log();
        return (
            <Nav active={this.props.activeMenu}>
                <List>
                    <Item>
                        <Link href="#">item 1</Link>
                    </Item>
                    <Item>
                        <Link href="#">item 2</Link>
                    </Item>
                    <Item>
                        <Link href="#">item 3</Link>
                    </Item>
                    <Item>
                        <Link href="#">item 4</Link>
                    </Item>
                </List>
            </Nav>
        )
    }
}

export default Navigation;