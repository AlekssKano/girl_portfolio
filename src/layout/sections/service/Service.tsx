import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";

export const Service = () => {
    return (
        <StyledService>
                <div>
                    <SectionTitle>My awasome <br/>Service</SectionTitle>
                    <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</StyledText>
                    <Button>Download CV</Button>
                </div>


            <div>
                <Icon iconId={"bant"} width={'80'} height={'80'} viewBox={'0 0 100 100'}/>
                <SkillsTitle>Design</SkillsTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                <Button>Learn More</Button>
            </div>
            <div>
                <Icon iconId={'happyface'} width={'80'} height={'80'} viewBox={'0 0 100 100'}/>
                <SkillsTitle>UI/UX</SkillsTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                <Button>Learn More</Button>
            </div>
            <div>
                <Icon iconId={'coolface'} width={'80'} height={'80'} viewBox={'0 0 100 100'}/>
                <SkillsTitle>Developer</SkillsTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                <Button>Learn More</Button>
            </div>
        </StyledService>

    );
};


const StyledService = styled.section`
    background-color: bisque;

`
const StyledText = styled.p`

`
const SkillsTitle = styled.h3`

`
