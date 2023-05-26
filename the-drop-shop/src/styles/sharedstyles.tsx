import styled from "styled-components";

interface LinkContainerInterface {
    isTransparent?: boolean;
}

export const LinkContainer = styled.div`
    background-color: ${(props: LinkContainerInterface) => props.isTransparent ? "transparent" : "#FFF"};
    border: ${(props: LinkContainerInterface) => props.isTransparent ? "1px solid #1F1F1F" : "none"};
    padding: 23px 29px;
    text-align: center;
`;