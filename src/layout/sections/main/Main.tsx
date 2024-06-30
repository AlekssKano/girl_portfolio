import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photoJPEG/girl.png'
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (

        <StyledMain>

            <FlexWrapper align={'center'} justify={'space-around'}>
                <TextBlock>
                    <h2>Hy! I Am <br/> Bulam Gerhana</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo
                        consequat.</p>
                    <Button>Hire Me</Button>
                    <IconsDirection>
                        <Icon iconId={"paypal"} width={'60'} height={'40'} viewBox={'0 0 50 50'}/>
                        <Icon iconId={"paysafeCard"} width={'60'} height={'40'} viewBox={'0 0 50 50'}/>
                        <Icon iconId={"visa"} width={'60'} height={'40'} viewBox={'0 0 50 50'}/>
                    </IconsDirection>
                </TextBlock>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>


    )
        ;
};

const Photo = styled.img`
    width: 498px;
    height: 571px;
    object-fit: cover;

`
const StyledMain = styled.section`
    min-height: 100vh;

`
const TextBlock = styled.p`
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
`
const IconsDirection = styled.div`
    flex-direction: row;`