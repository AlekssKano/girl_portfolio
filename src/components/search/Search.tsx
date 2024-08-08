import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Search = () => {
    return (
        <StyledSearch>
            <StyledInput type="text" placeholder="Search"/>
            <Icon iconId={"loupe"} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
        </StyledSearch>
    );
};


const StyledSearch = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
    border-style: solid;
    border-color: #706363;
   padding-left: 10px;
    padding-right: 10px;
    min-width: 110px;
    min-height: 41px;
    
    @media ${theme.media.tablet}{
        display: none;
    }

`
const StyledInput = styled.input`

    outline: none;
    border: none;
    height: 20px;
    width: 50px;
    background-color: rgba(237, 237, 237, 0.2);
    background-color: #fff;
    
`
