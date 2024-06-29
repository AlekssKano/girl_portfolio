import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Search} from "../../components/search/Search";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <Search/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #b4f3e6;
    display: flex;
    justify-content: space-between;
`