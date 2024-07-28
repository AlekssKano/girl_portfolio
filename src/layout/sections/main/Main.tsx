import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo_girl_3.png'
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import happy from '../../../assets/images/happ_face.png';

export const Main = () => {
    return (

        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'}>
                    <TextBlock>
                        <NameText>Hy! I Am <br/> <Name>Bulam Gerhana</Name></NameText>
                        <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </SmallText>
                        <MainButton>Hire Me</MainButton>
                        <IconsDirection>
                            <span> <Icon iconId={"paypal"} width={'60'} height={'40'} viewBox={'0 0 60 40'}/></span>
                            <span> <Icon iconId={"paysafeCard"} width={'60'} height={'40'}
                                         viewBox={'0 0 60 40'}/></span>
                            <span> <Icon iconId={"visa"} width={'60'} height={'40'} viewBox={'0 0 60 40'}/></span>
                        </IconsDirection>
                    </TextBlock>
                    <PseudoWrapper>
                        <Smile>
                            <Icon iconId={"happyface"} width={'50'} height={'50'} viewBox={'5 0 80 80'}/>

                            <span>UI/UX <br/> </span>
                            <span>lorem ipsum dolor sit amet</span></Smile>
                        <Search>
                            <Icon iconId={"loupe"} width={'50'} height={'50'} viewBox={'0 0 50 50'}/>
                            <span> User Research</span>
                        </Search>
                        <Award>
                            <Icon iconId={"award"} width={'50'} height={'50'} viewBox={'-10 0 50 30'}/>
                            <span>Best Design Awarde</span>
                        </Award>

                    </PseudoWrapper>
                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>

        </StyledMain>


    )
        ;
};
const StyledMain = styled.section`
    display: flex;
    min-height: 100vh;

    background: linear-gradient(to right, #f8e9e9, rgba(248, 238, 215, 70%), rgb(171, 204, 232, 70%));
    // background: linear-gradient(to right, white, rgba(149, 115, 39, 0.51), rgba(15, 144, 166, 0.16));
    justify-content: center;
    align-items: center;
    padding-top: 15px;


`
const Name = styled.h2`
    color: ${theme.colors.accent}
`
const SmallText = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: rgba(65, 57, 57, 0.73);
    margin: 39px 0 28px 0;
`
const NameText = styled.h2`
    font-weight: 700;
    font-size: 48px;
    color: #413939;
    line-height: 1;
`
const Smile = styled.div`


    display: inline-block;
    border-radius: 15px;
    padding: 10px;
    width: 269px;
    height: 73px;

    background-color: #ffffff;
    border: 1px solid #cd89c6;
    box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.13);

    flex-direction: row;
    position: absolute;

    top: 180px;
    left: -130px;
    flex-wrap: nowrap;

    span {
        //width: 90%;

        &:first-child {
            font-weight: 600;
            font-size: 14px;
            color: #413939;
        }

        &:last-child {
            font-weight: 400;
            color: rgba(65, 57, 57, 0.56);
        }

        box-sizing: border-box;
        width: auto;
        max-width: 100%;

    }



`
const Search = styled.div`

    display: inline-block;
    border-radius: 15px;
    padding: 16px 24px;
    width: 192px;
    height: 56px;
    background-color: #ffffff;
    border: 1px solid #cd89c6;
    box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.13);


    position: absolute;
    top: 100px;
    left: -55px;
    
    span{
        font-weight: 600;
        font-size: 16px;
        letter-spacing: -0.03em;
        color: #413939;
    }
`
const Award = styled.div`
    
        display: inline-block;
        border-radius: 10px;
        width: 140px;
        height: 56px;
        background-color: #ffffff;
        border: 1px solid #cd89c6;
        box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.13);


        position: absolute;
        right: -535px;
        top: -220px;
    flex-direction: row;
    
    span{
        font-weight: 600;
        font-size: 12px;
        color: #413939;
        
    }
`
const PseudoWrapper = styled.div`
    position: relative;
`
const Photo = styled.img`
    max-width: 500px;
    width: 100%;
    object-fit: cover;
    object-position: center;


`

const TextBlock = styled.p`
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
`
const IconsDirection = styled.div`
    position: relative;

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0 5px;
        box-sizing: border-box;
    }


    span {
        &::before {
            content: "";
            display: inline-block;
            width: 60px;
            height: 40px;
            background-color: #ffffff;
            border: 1px solid #cd89c6;


            position: absolute;
            bottom: 0.5rem;
            z-index: -1;
            margin: 0;
            padding: 0 5px !important;

        }
    }

`
const MainButton = styled.button`
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    background-color: #fff;
    color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
    border: 1px solid ${theme.colors.accent};
    border-radius: 10px;
    padding: 6px 16px;
    margin-bottom: 35px;
}

:hover {
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    background-color: ${theme.colors.accent};
    color: #fff;
    border-radius: 10px;
    padding: 6px 16px;
    margin-bottom: 35px;
}
`