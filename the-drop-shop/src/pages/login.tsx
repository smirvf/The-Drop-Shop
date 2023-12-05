import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Divider, Footer, NavBar, PageLink } from "@/components/componentsindex";
import { useContext, useState } from "react";
import Link from "next/link";


const Section = styled.fieldset`
  background-color: #D9D9D9;
  border: none;
  text-align: left;
  margin: 35px;
`;

const Input = styled.input`
  border: none;
  height: 50px;
  width: 100%;
  font-size: 24px
`;

const Button = styled.button`
  border-radius: 8px;
  background-color: #1F1F1F;
  border: 1px solid;
  max-width: 445px;
  width: 100%;
  height: 70px;
  color: white;
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 20px;
  margin: 35px;

  &:hover {
    cursor: pointer;
  }
`;

const Account = styled.p`
    margin: 35px;
`

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
    return (
        <>
        <Head>
            <title>Login</title>
        </Head>
        <div style={{ zIndex: 1, position: "relative" }}>
        <NavBar highlightedLink="Profile" />
        <div/>
        <Section>
        <h2>Login</h2>
            <br />
            <label htmlFor="Email">Email</label><br />
            <Input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            <label htmlFor="Password">Password</label><br />
            <Input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
          </Section>
          <Button type="submit">Login</Button>
          <Account>
            Don't have an account? <Link href="/signup">Sign Up</Link>
          </Account>
      </div>

        </>
    )
}