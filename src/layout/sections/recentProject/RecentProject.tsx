import React from 'react';
import styled from "styled-components";
import project1 from "./../../../assets/images/photoJPEG/poject1.webp"
import project2 from "./../../../assets/images/photoJPEG/project2.webp.webp"
import slider1 from "../../../assets/images/photoJPEG/slider1.webp";
import slider2 from "../../../assets/images/photoJPEG/slider2.webp";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const RecentProject = () => {
    return (
        <StyledProject>
            <SectionTitle>Recent Project</SectionTitle>
           <StyledPhoto>
               <Photo src={slider1} alt=""/>
               <Photo src={slider2} alt=""/>
           </StyledPhoto>



        </StyledProject>
    );
};
const StyledPhoto = styled.section`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #f1bcdc;
`
const StyledProject = styled.section`
    background-color: #f1bcdc;
    
`
const Photo = styled.img`
    width: 460px;
    height: 481px;
    object-fit: cover;
    border-radius: 20px;
    transform: rotate(90deg);
  

`