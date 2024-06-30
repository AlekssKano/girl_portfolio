import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import photo from "../../../assets/images/photoJPEG/giri1.webp";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Works = () => {
    return (
        <StyledWorks>
          <FlexWrapper align={'end'} justify={'space-around'}>
              <StyledText>
                  <h2>Client get always <br/>exceptional works from me</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut la Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                  <ol>
                      <li>Hard Works </li>
                      <li>Clean</li>
                      <li>Commintments</li>
                  </ol>
              </StyledText>
              <Photo src={photo} alt=""/>
          </FlexWrapper>
        </StyledWorks>
    );
};

const Photo = styled.img`
    width: 498px;
    height: 571px;
    object-fit: cover;

`
const StyledWorks = styled.section`
    background-color: #cbef80;
`
const StyledText= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`