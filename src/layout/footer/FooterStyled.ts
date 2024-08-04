import styled from "styled-components";
import {theme} from "../../styles/Theme";


const Footer = styled.footer`
   background: linear-gradient(to right, #f8e9e9, rgba(248, 238, 215, 70%), rgb(171, 204, 232, 70%));
    padding-bottom: 122px;
    position: relative;

`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;

`
const SocialLink = styled.a`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background: rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.accent};
   transition: ${theme.animations.transition} ;
    &:hover {
        color: ${theme.colors.primary};
        transform: translateY(-4px);
    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`
const SocialItem = styled.li`

`
const FooterText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.55556;
    text-align: center;
    color: #9ca3af;
`

export const S = {
    SocialItem,
    Copyright,
    SocialLink,
    SocialList,
    Footer,
    FooterText

}