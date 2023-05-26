import styled from 'styled-components';
import { NavBar, PageLink } from '../componentsindex';
import { LinkContainer } from '@/styles/sharedstyles';

const StyledHeroSection = styled.section`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero_image.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: fill;
    position: relative;
`;

const ShopNowContainer = styled(LinkContainer)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const HeroSection = () => {
    return (
        <>
            <StyledHeroSection>
                <NavBar isTransparent />
                <ShopNowContainer>
                    <PageLink href='/shop' isSecondary >Shop Now</PageLink>
                </ShopNowContainer>
            </StyledHeroSection>
        </>
    );
}