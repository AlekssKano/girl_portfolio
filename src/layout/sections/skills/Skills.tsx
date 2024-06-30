import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <h3>Programming language skill</h3>
            <StyledIcons>

                <Icon iconId={"c_language"} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
                <Icon iconId={"python"} width={'25'} height={'25'} viewBox={'0 0 25 25'}/>
                <Icon iconId={"html"} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
                <Icon iconId={"ruby"} width={'50'} height={'50'} viewBox={'0 0 50 50'}/>
                <Icon iconId={"php"} width={'25'} height={'25'} viewBox={'0 0 25 25'}/>

            </StyledIcons>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #3eb0df;
    min-height: 20vh;;

`
const StyledIcons = styled.div`
    display: flex;
    gap: 15px;
    justify-content: left;
align-items: center;
`
