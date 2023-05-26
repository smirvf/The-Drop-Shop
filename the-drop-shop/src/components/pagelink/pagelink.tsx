import { PageLinkInterface } from "./pagelink.types";
import styled from "styled-components";
import Link from "next/link";


const StyledLink = styled.a<PageLinkInterface>`
    margin: 25px;
    text-decoration: none;
    color: ${props => (props.isSecondary ? "#1F1F1F" : "#FFF")};
    font-size: 22px;

    @media (max-width: 768px) {
        font-size: 16px;
    } 
`;

const LargeLink = styled(StyledLink)`
    font-size: 32px;
    margin: 50px;

    @media (max-width: 768px) {
        font-size: 22px;
    } 
`;

export const PageLink = (props: PageLinkInterface) => {
    if (props.isLarge) {
        return (
            <Link href={props.href} passHref legacyBehavior style={{textDecoration: "none"}} >
                <LargeLink isSecondary={props.isSecondary} href={props.href}>{props.children}</LargeLink>
            </Link>
        )
    } else {
        return(
            <Link href={props.href} passHref legacyBehavior style={{textDecoration: "none"}} >
                <StyledLink isSecondary={props.isSecondary} href={props.href}>{props.children}</StyledLink>
            </Link>
        )
    }
}