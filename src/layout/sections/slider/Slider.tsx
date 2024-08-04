import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Container} from "../../../components/Container";
import styled from "styled-components";
import './../../../styles/slider.css'
import slider1 from "./../../../assets/images/photoJPEG/slider1.webp"
import slider2 from "./../../../assets/images/photoJPEG/slider2.webp"
import slider3 from "./../../../assets/images/photoJPEG/slider3.webp"
import slider4 from "./../../../assets/images/photoJPEG/slider4.webp"
import slider5 from "./../../../assets/images/photoJPEG/slider5.webp"

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
};
const Photo = styled.img`
    width: 225px;
    height: 221px;
    object-fit: cover;
    border-radius: 20px;
    margin: 28px; 
    


`

const items = [
    <div className="item" data-value="1"><Photo src={slider1} alt=""/></div>,
    <div className="item" data-value="2"><Photo src={slider2} alt=""/></div>,
    <div className="item" data-value="3"><Photo src={slider3} alt=""/></div>,
    <div className="item" data-value="4"><Photo src={slider4} alt=""/></div>,
    <div className="item" data-value="5"><Photo src={slider5} alt=""/></div>,
    <div className="item" data-value="6"><Photo src={slider1} alt=""/></div>,
    <div className="item" data-value="7"><Photo src={slider2} alt=""/></div>,
    <div className="item" data-value="8"><Photo src={slider3} alt=""/></div>,
    <div className="item" data-value="9"><Photo src={slider4} alt=""/></div>,
    <div className="item" data-value="10"><Photo src={slider5} alt=""/></div>,
];

export const Slider = () => (
    <StyledSlider>
    <Container>

            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                infinite={true}
            />
    </Container>
        </StyledSlider>



);


const StyledSlider = styled.section`
   
    display: flex;
    flex-direction: row;
    align-items: center;
    //justify-content: space-around;
    background: linear-gradient(to right, #f8e9e9, rgba(248, 238, 215, 70%), rgb(171, 204, 232, 70%));
   



`
