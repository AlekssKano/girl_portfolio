import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";



export const Menu = (props:{menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item:string, index:number) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
               <Icon iconId="sun" width={'25'} height={'25'} viewBox={'0 0 25 25'}/>
            </ul>
        </StyledMenu>
    );
};


const Link = styled.a`
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #413939;
    border-radius: 10px;
    padding: 6px 16px;
    //width: 90px;
    //height: 33px;
    
    :hover{
        background-color: ${theme.colors.accent};
        color: #fff;
    }
`

const StyledMenu = styled.nav`
    ul {
        display: flex;
        //gap: 24px;
        justify-content: center;
        padding: 0;
        margin: 0;
        //&:nth-child(2){
        //    margin: 0 24px;
        //}
        
    }

`
const ListItem = styled.li`
    &:nth-child(4){
        margin:0 24px 0 8px;
    }
`
