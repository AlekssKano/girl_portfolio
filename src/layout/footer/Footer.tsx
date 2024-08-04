import React from 'react';
import {Container} from "../../components/Container";
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './FooterStyled'

const socialItemData = [
    {
        iconId: "twitterSign"
    },
    {
        iconId: "atSign"
    },
    {
        iconId: "instagramSign"
    },
    {
        iconId: "facebookSign"

    },
]
export const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>
                    Contact Me
                </SectionTitle>
                <S.FooterText>
                    I’m not currently taking on new client work but feel free to contact me for any other inquiries.
                </S.FooterText>
                <S.SocialList>
                    {socialItemData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"33px"} width={"33px"} viewBox={"0 0 33px 33px"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}


                </S.SocialList>
                <S.Copyright>© 2024 Bulam Gerhana, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    )
}


