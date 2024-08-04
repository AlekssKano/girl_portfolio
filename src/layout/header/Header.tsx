import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Search} from "../../components/search/Search";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const items =["Home", "About", "Testimoni", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                    <Search/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    //background: linear-gradient(to right, #f8e9e9, rgba(248, 238, 215, 90%), rgb(171, 204, 232, 90%));
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`