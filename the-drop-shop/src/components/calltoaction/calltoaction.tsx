import Link from "next/link";
import { CallToActionInterface } from "./calltoaction.types";
import styled from "styled-components";

const StyledLink = styled.a`
    margin: 25px;
    text-decoration: none;
    color: #1F1F1F;
    font-size: 22px;
    position: relative;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 16px;
    } 
`;

const Container = styled.div<{isTransparent?: boolean}>`
    background-color: ${(isTransparent) => !isTransparent ? "transparent" : "#FFF"};
    border: ${(isTransparent) => !isTransparent ? "1px solid #1F1F1F" : "none"};
    padding: 23px 29px;
    text-align: center;
    max-width: 175px;
`;

export const CallToAction = (props: CallToActionInterface) => {

    return (
        <Link href={props.href} passHref legacyBehavior style={{textDecoration: "none"}} >
            <StyledLink href={props.href}>
                <Container isTransparent={props.isTransparent}>{props.children}</Container>
            </StyledLink>
        </Link>
    );
}