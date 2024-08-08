import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item: string, index: number) => {
                        return <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    })}
                    {/*<Icon iconId="sun" width={'25'} height={'25'} viewBox={'0 0 25 25'}/>*/}
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};


const Link = styled.a`
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color:${theme.colors.accent};
    border-radius: 10px;
    padding: 6px 16px;
    //width: 90px;
    //height: 33px;

    :hover {
        background-color: ${theme.colors.accent};
        color: #fff;
    }
`

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }


`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background: rgba(13, 21, 49, 0.8); 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`

    position: fixed;
    top: -100px;
    right: 50px;
    width: 200px;
    height: 200px;
    z-index: 9999999;
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: #fff;

        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);


        `}
        //display: flex;
        //justify-content: center;
        //align-items: center;

        &::before {
            content: "";
        
            display: block;
            width: 36px;
            height: 2px;
            background-color: #fff;

            position: absolute;

            transform: translateY(-10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(-45deg);
            `}
        }

        &::after {
            content:"";
            display: block;
            width: 24px;
            height: 2px;
            background-color: #fff;

            position: absolute;

            transform: translateY(10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(45deg);
                width: 36px;
            `}
        }
`


const ListItem = styled.li`

  
`
