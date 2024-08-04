import React from 'react';
import photo from "../../../assets/images/photoJPEG/giri1.webp";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <GridWork>
                    <ServiceText>
                        <WorkTitle>My awasome <br/><Accent>Service</Accent></WorkTitle>
                        <StyledTextService>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                            incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                            consequat.</StyledTextService>
                        <Button>Download CV</Button>
                    </ServiceText>


                    <BantDesign>
                        <Icon iconId={"bant"} width={'80'} height={'80'} viewBox={'0 0 80 80'}/>
                        <SkillsTitle>Design</SkillsTitle>
                        <BantText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            la</BantText>
                        <Button>Learn More</Button>
                    </BantDesign>

                    <UIDesign>
                        <Icon iconId={'happyface'} width={'80'} height={'80'} viewBox={'0 0 80 80'}/>
                        <SkillsTitle>UI/UX</SkillsTitle>
                        <ItemText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            la</ItemText>
                        <Button>Learn More</Button>
                    </UIDesign>
                    <DeveloperDesign>
                        <Icon iconId={'coolface'} width={'80'} height={'80'} viewBox={'0 0 80 80'}/>
                        <SkillsTitle>Developer</SkillsTitle>
                        <ItemText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            la</ItemText>
                        <Button>Learn More</Button>
                    </DeveloperDesign>


                    <WorksText>
                        <TitleWorksText>Client get always <span>exceptional</span> <span>works</span> from
                            me</TitleWorksText>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut la Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt
                            ut la</p>
                        <ListItems>
                            <li>Hard Works</li>
                            <li>Clean</li>
                            <li>Commintments</li>
                        </ListItems>
                    </WorksText>
                    <PhotoItems>
                        <Clock>
                            <Icon iconId={"Clock"} width={'97'} height={'85'} viewBox={'0 0 97 85'}/>
                            <ClockText>
                                <span>24 Hour</span>
                                <p>Lorem <span>ipsum</span> <span>dolor</span> sit amet, </p>
                            </ClockText>
                        </Clock>
                        <GreenSign><Icon iconId={"GreenSign"} width={'80'} height={'80'} viewBox={'0 0 80 80'}/></GreenSign>
                        <Clear>
                            <h3>
                                Clear
                            </h3>
                            <p>Lorem <span>ipsum</span> <span>dolor</span> sit amet, </p>
                        </Clear>
                        <Photo src={photo} alt=""/>
                    </PhotoItems>


                </GridWork>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`

    background: linear-gradient(to right, #f8e9e9, rgba(248, 238, 215, 70%), rgb(171, 204, 232, 70%));
    
`
const GridWork = styled.div`
    display: grid;
    grid-template-columns: 28% 28% 39%;
    grid-template-rows: 340px 250px 200px 420px;
    //height: 100%; //Для резины
    //height: 100vh;
    column-gap: 35px;
    row-gap: 10px;
    //background-color: rgba(0, 255, 38, 0.13);

    grid-template-areas: 
"BantDesign BantDesign ServiceText"
"UIDesign DeveloperDesign ServiceText"
"UIDesign DeveloperDesign PhotoItem"
"WorksText WorksText PhotoItem"


`
const WorkTitle = styled.h2`
    color: ${theme.colors.font};

    font-weight: 700;
    font-size: 48px;
    text-align: left;

`
const StyledTextService = styled.p`
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.font};
    padding-top: 28px;
    padding-bottom: 18px;
`
const SkillsTitle = styled.h3`
`
const Photo = styled.img`
    width: 498px;
    height: 571px;
    object-fit: cover;
    z-index: 1;

`
const Clear = styled.div`
    border-radius: 20px;
    width: 207px;
    height: 102px;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.13);
    background: #fff;
    position: absolute;

    right: 30px;
    bottom: 500px;
    z-index: 0;
    text-align: center;

    h3 {
        font-weight: 700;
        font-size: 24px;
        color: rgba(65, 57, 57, 0.85);
        padding-top: 15px;
    }

    p {

        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: rgba(65, 57, 57, 0.61);

        span {
            :first-child {
                font-weight: 400;
                font-size: 14px;
                text-align: center;
                color: ${theme.colors.accent};

            }

            :last-child {
                font-weight: 400;
                font-size: 14px;
                text-align: center;
                color: ${theme.colors.secondary};

            }

        }

        padding-left: 38px;
        padding-right: 23px;
    }


`
const GreenSign = styled.div`
position: absolute;
    right: 50px;
    bottom: 380px;
`
const Clock = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
        border: 5px solid #f0eefc;;
        border-radius: 20px;
        width: 175px;
        height: 203px;
        box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.13);
        background: rgb(255, 255, 255);

        position: absolute;
        right: 250px;
        bottom: 140px;
        z-index: 2;
`
const ClockText = styled.div`
    text-align: center;
    padding: 0 16px 0 16px;

}

span {
    :first-child {
        font-weight: 700;
        font-size: 24px;
    }

}

p {

    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: rgba(65, 57, 57, 0.61);

    span {
        :first-child {
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            color: ${theme.colors.accent};

        }

        :last-child {
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            color: ${theme.colors.secondary};

        }
    }
`
const PhotoItems = styled.div `
    grid-area: PhotoItem;
    display: flex;
    justify-content: center;
    align-items: end;
    position: relative;

    
`



const WorksText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    grid-area: WorksText;

    p {
        font-weight: 400;
        font-size: 16px;
        color: rgba(65, 57, 57, 0.59);
        padding: 24px 0 40px 0;

    }

`
const TitleWorksText = styled.h1`
    font-weight: 700;
    font-size: 44px;

    span {
        :first-child {
            color: ${theme.colors.secondary};
        }

        :last-child {
            color: ${theme.colors.accent};
        }
    }
`
const ListItems = styled.ol`
    font-weight: 600;
    font-size: 24px;
    color: rgba(65, 57, 57, 0.71);
    padding-left: 30px;
`


const BantDesign = styled.div`

    border-radius: 18px;
    height: 282px;
    width: 498px;
    box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.13);
    background: rgba(135, 115, 238, 0.12);

    grid-area: BantDesign;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Button} {

        border-radius: 8px;
        padding: 6px 10px;
        width: 98px;
        height: 33px;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        background-color: #fff;
        color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
        border: 1px solid ${theme.colors.accent};

        &:hover {
            border-radius: 10px;
            padding: 6px 10px;
            background-color: ${theme.colors.accent};
            color: #fff;


        }
    }

`
const BantText = styled.p`
    text-align: center;
    padding: 13px 47px 25px 47px;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.font}


`
const UIDesign = styled.div`
    border-radius: 18px;
    width: 282px;
    height: 406px;
    box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.13);
    background: rgba(135, 115, 238, 0.12);

    grid-area: UIDesign;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Button} {

        border-radius: 8px;
        padding: 6px 10px;
        width: 98px;
        height: 33px;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        background-color: #fff;
        color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
        border: 1px solid ${theme.colors.accent};

        &:hover {
            border-radius: 10px;
            padding: 6px 10px;
            background-color: ${theme.colors.accent};
            color: #fff;


        }
    }

`
const DeveloperDesign = styled.div`
    border-radius: 18px;
    width: 282px;
    height: 406px;
    box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.13);
    background: rgba(135, 115, 238, 0.12);

    grid-area: DeveloperDesign;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Button} {

        border-radius: 8px;
        padding: 6px 10px;
        width: 98px;
        height: 33px;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        background-color: #fff;
        color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
        border: 1px solid ${theme.colors.accent};

        &:hover {
            border-radius: 10px;
            padding: 6px 10px;
            background-color: ${theme.colors.accent};
            color: #fff;


        }
    }
`
const ItemText = styled.p`
    text-align: center;
    padding: 24px 42px 40px 42px;
    font-weight: 400;
    font-size: 14px;
    color: #413939;
`

const ServiceText = styled.div`
    grid-area: ServiceText;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    ${Button} {
        border-radius: 10px;
        padding: 6px 10px;
        width: 131px;
        height: 36px;

        font-weight: 700;
        font-size: 16px;
        text-align: center;
        background-color: #fff;
        color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
        border: 1px solid ${theme.colors.accent};
        margin-bottom: 35px;

        &:hover {
            border-radius: 10px;
            padding: 6px 10px;
            background-color: ${theme.colors.accent};
            color: #fff;


        }
    }
}


`
const Accent = styled.h1`
    color: ${theme.colors.accent}

// `
// const IconsWraper = styled.div`
//position: relative;
//
// `