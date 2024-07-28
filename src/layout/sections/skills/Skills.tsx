import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <h3>Programming language skill</h3>
                <StyledIcons>

                    <Icon iconId={"c_language"} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
                    <Icon iconId={"python"} width={'25'} height={'25'} viewBox={'0 0 25 25'}/>
                    <Icon iconId={"html"} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
                    <Icon iconId={"ruby"} width={'50'} height={'50'} viewBox={'0 0 50 50'}/>
                    <Icon iconId={"php"} width={'25'} height={'25'} viewBox={'0 0 25 25'}/>

                </StyledIcons>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: rgba(147, 176, 197, 0.56);
    min-height: 100%;;
    padding: 66px 0 70px 0;

`
const StyledIcons = styled.div`
    display: flex;
    gap: 15px;
    justify-content: left;
    align-items: center;
    padding-top: 20px;


    Icon {
        &:first-child {
            box-shadow: 0 -5px 10px 0 rgb(251, 0, 227)
        }

    }

`
