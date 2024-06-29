import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
        <a href="">
            <Icon iconId={"logo"}/>
        </a>
            <StyledLogoText>BULAM <br/> PROJECT</StyledLogoText>
        </StyledLogo>
    );

};
const StyledLogoText = styled.span`
`
const StyledLogo = styled.div`
display: flex;
`