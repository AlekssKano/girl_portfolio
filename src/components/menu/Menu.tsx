import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About </a></li>
                <li><a href="">Testimoni</a></li>
                <li><a href="">Contact </a></li>
               <Icon iconId="sun" width={'25'} height={'25'} viewBox={'0 0 25 25'}/>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

`