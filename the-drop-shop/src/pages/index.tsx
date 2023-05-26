import Head from 'next/head'
import { Divider, Footer, HeroSection, PageLink, ShoeCollection } from '@/components/componentsindex'
import shoes from '../shoecollection.json'
import styled from 'styled-components'
import { LinkContainer } from '@/styles/sharedstyles'
import { useEffect, useState } from 'react'
import { Product } from '@/types/product'

const ShopMoreContainer = styled(LinkContainer)`
    max-width: 175px;
    margin: 0 auto;
`;

export default function Home() {

    const [latestProducts, setLatestProducts] = useState<Product[]>([]);

    useEffect(() => {
        getLatestProducts();
    }, [])

    const getLatestProducts = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/v1/products/latest?num=3");
            const data = await res.json() as Product[];
            setLatestProducts(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Head>
                <title>The Drop Shop</title>
                <link rel="icon" href="/favicon.webp" />
            </Head>
            <HeroSection />
            <ShoeCollection title='Latest Drops' products={latestProducts} />
            <Divider />
            <ShopMoreContainer isTransparent >
                <PageLink href='/shop' isSecondary >Shop More</PageLink>
            </ShopMoreContainer>
        </>
    )
}
