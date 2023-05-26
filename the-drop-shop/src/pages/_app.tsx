import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';
import { Montserrat } from 'next/font/google';
import { CartProvider } from '@/context/cartcontext';
import { Footer } from '@/components/componentsindex';

const montserrat = Montserrat({subsets : ['latin']});

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${montserrat.style.fontFamily}, sans-serif;
    background-color: #FFF;
    color: #1F1F1F;
    font-weight: 300;
    font-size: 22px;
    line-height: 35px;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: auto;
  }

  button {
    all: unset;
    text-align: center;
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed !important;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
  }

  h3 {
    font-weight: 400;
    font-size: 23px;
  }

  @media (max-width: 768px) {
    html, body {
      font-size: 14px;
      line-height: 28px;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  ); 
}
