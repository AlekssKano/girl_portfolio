import React from 'react';
import styled from "styled-components";
import slider1 from "./../../../assets/images/photoJPEG/slider1.webp"
import slider2 from "./../../../assets/images/photoJPEG/slider2.webp"
import slider3 from "./../../../assets/images/photoJPEG/slider3.webp"
import slider4 from "./../../../assets/images/photoJPEG/slider4.webp"
import slider5 from "./../../../assets/images/photoJPEG/slider5.webp"

export const Slider = () => {
    return (
        <StyledSlider>
            <Photo src={slider1} alt=""/>
            <Photo src={slider2} alt=""/>
            <Photo src={slider3} alt=""/>
            <Photo src={slider4} alt=""/>
            <Photo src={slider5} alt=""/>
        </StyledSlider>
    );
};
const StyledSlider = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #d6bcf1;
`
const Photo = styled.img`
    width: 225px;
    height: 221px;
    object-fit: cover;
    border-radius: 20px;
  

`