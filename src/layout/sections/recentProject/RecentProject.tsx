import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import slider1 from "../../../assets/images/photoJPEG/project1.webp";
import slider2 from "../../../assets/images/photoJPEG/project2.webp";
import './../../../styles/slider.css'
import {theme} from "../../../styles/Theme";
import photo from "../../../assets/images/photo_girl_3.png";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
};
const Photo = styled.img`
    width: 481px;
    height: 460px;
    object-fit: cover;
    border-radius: 20px;
    transform: rotate(90deg);
`
const StyledPhoto = styled.div`
    //border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(135, 115, 238, 0.12);
    box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.13);
    border-radius: 18px;
    width: 565px;
    height: 540px;
    
`
type SlidePropsType = {
    sliderNumber: string;
}
const Project =(props: SlidePropsType) =>{
    return (
        <StyledProject>

            <StyledPhoto><Photo src={props.sliderNumber} alt=""/> </StyledPhoto>
        </StyledProject>
    );
}
const items = [
    <div className="item" data-value="1"><Project sliderNumber={slider1}/></div>,
    <div className="item" data-value="2"> <Project sliderNumber={slider2}/></div>,
    <div className="item" data-value="3"><Project sliderNumber={slider1}/></div>,
    <div className="item" data-value="4"><Project sliderNumber={slider2}/></div>,




];

export const RecentProject = () => (
    <StyledProject>
        <Container>
            <SectionTitle>Recent Project</SectionTitle>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </Container>
    </StyledProject>


);


const StyledProject = styled.section`
    
   div{
   //rgba(248, 238, 215, 0%)
   }
    section{
        
        width: 97.5%;
        border-radius: 18px;
    }
 
`

    


const MobileRecentProject = styled.div`
display: none;
    @media${theme.media.mobile}{
        display: flex;
        
    }
`

