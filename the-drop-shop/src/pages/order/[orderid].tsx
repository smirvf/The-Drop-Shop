import { Footer, NavBar, PageLink } from "@/components/componentsindex";
import { LinkContainer } from "@/styles/sharedstyles";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledConfirmOrder = styled.div`
    text-align: center;
`;

const ShopNowContainer = styled(LinkContainer)`
    max-width: 175px;
    margin: 0 auto;
`;

export default function ConfirmOrder() {
    const router = useRouter();
    const { productid } = router.query;

    return (
        <StyledConfirmOrder>
            <Head>
                <title>Order</title>
                <link rel="icon" href="/favicon.webp" />
            </Head>
            <NavBar />
            <h2>Thank You For your Order!</h2>
            <Image
                src='/images/confirm_order_image.jpg.webp'
                alt='Thank you for your order'
                width={425}
                height={300}
                style={{objectFit: 'contain'}}
            />
            <p>Your item will be dispatched shortly</p>
            <ShopNowContainer isTransparent >
                <PageLink href="/shop" isSecondary >Shop Now</PageLink>
            </ShopNowContainer>
        </StyledConfirmOrder>
    );
}