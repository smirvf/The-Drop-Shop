import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';
import { Montserrat } from 'next/font/google';
import { CartProvider } from '@/context/cartcontext';
import { Footer } from '@/components/componentsindex';
import { createContext, useState } from 'react';
import { User } from '@/types/user';
import { UserContextStruct } from '@/types/usercontextstruct';

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

export const UserContext = createContext<UserContextStruct>({currentUser: null, setCurrentUser: null});

export default function App({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState<User>({} as User);

  return (
    <CartProvider>
      <UserContext.Provider
        value={{
          currentUser,
          setCurrentUser
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </UserContext.Provider>
    </CartProvider>
  ); 
}
