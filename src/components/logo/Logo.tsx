import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../FlexWrapper";

export const Logo = () => {
    return (
        <StyledLogo>
            <FlexWrapper justify="center" align="center">
                <a href="">
                    <Icon iconId={"logo"}/>
                </a>
                <StyledLogoText>
                    <div><BluText>BUL</BluText>AM <br/> PROJECT</div>
                </StyledLogoText>
            </FlexWrapper>

        </StyledLogo>
    );

};
const StyledLogoText = styled.span`
    //display: flex;
    //justify-content: center;
    //align-items: center;
    font-family: 'Sarabun', sans-serif;
    font-weight: 700;
    font-size: 12px;
    

`
const StyledLogo = styled.div`
    //display: flex;
    //justify-content: center;
    //justify-items: center;
    //margin: 0;
    a {
        margin: 10px 0 0 ;
    }

`
const BluText = styled.span`
    color: ${theme.colors.accent};
`