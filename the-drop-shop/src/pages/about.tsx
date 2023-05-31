import { CallToAction } from "@/components/calltoaction/calltoaction";
import { Divider, Footer, NavBar, PageLink } from "@/components/componentsindex";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const AboutContainer = styled.div`
  flex: 0.75;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  flex: 1.5;
  padding: 10px;
  margin-top: 20px;

  @media (min-width: 1200px) {
    margin-top: 0;
    padding-left: 110px;
    padding-right: 40px;
    text-align: left;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  transform: rotate(45deg);
  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    transform: rotate(0);
  }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <div style={{ zIndex: 1, position: "relative" }}>
        <NavBar highlightedLink="About" />
      </div>
      <FlexContainer>
        <AboutContainer>
          <StyledImage
            src="/images/about_page_image.jpg"
            alt="Collection of shoes"
            width={426}
            height={756}
          />
        </AboutContainer>
        <TextContainer>
          <h2>Who We Are</h2>
          <Divider />
          <p>
            Here at The Drop Shop we intend on creating a wonderful experience
            for people with a love of trainers. Our mission is to create a
            community for anybody with a passion for staying up to date with the
            latest trends as well as those who like to throw it back every once
            in a while. You will see that our stock regularly refreshes with new
            heat as soon as it gets released and we are constantly replenishing
            stock on older drops for those who missed out.
          </p>
          <CallToAction href="/shop" isTransparent>Shop Now</CallToAction>
        </TextContainer>
      </FlexContainer>
    </>
  );
}
