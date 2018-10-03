import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    margin-left: 0;
    margin-right: 16px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15);

    @media (min-width: 600px) {
        width: auto;
        margin-left: 24px;
    }
    
}
`

const WrapperInput = styled.div`
    color: inherit;
    width: 100%;
`

const Input = styled.input`
    width: 300px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding-top: 8px;
    padding-left: 80px;
    padding-right: 8px;
    padding-bottom: 8px;
    color: #fff;
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #fff;
    }
    &::-moz-placeholder { /* Firefox 19+ */
        color: #fff;
    }
    &:-ms-input-placeholder { /* IE 10+ */
        color: #fff;
    }
    &:-moz-placeholder { /* Firefox 18- */
        color: #fff;
    }

    @media (min-width: 960px) {
        width: 200px;
    }
`

class Search extends Component {
    render() {
        return (
            <Wrapper>
                <WrapperInput>
                    <Input type="text" placeholder="Search"/>
                </WrapperInput>
            </Wrapper>
        )
    }
}

export default Search