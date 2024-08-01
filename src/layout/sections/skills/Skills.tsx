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


                    <div><Icon iconId={"c_language"} width={'20'} height={'20'} viewBox={'0 0 20 20'}/></div>
                    <div><Icon iconId={"python"} width={'30'} height={'30'} viewBox={'0 0 28 28'}/></div>
                    <div><Icon iconId={"html"} width={'30'} height={'30'} viewBox={'0 0 30 30'}/></div>
                    <div><Icon iconId={"ruby"} width={'50'} height={'50'} viewBox={'0 0 50 50'}/></div>
                    <div><Icon iconId={"php"} width={'25'} height={'25'} viewBox={'0 0 25 25'}/></div>

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


    div {
        display: flex;
        border-radius:50%;
            //box-shadow: 3px 0 0 2px  rgb(251, 0, 227)
        box-shadow: 6px 0 4px 0 rgba(0, 0, 0, 0.23);

    }

    }

`
