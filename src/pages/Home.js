import React from "react";
import Hero  from "../components/Hero/Hero";
import Collection from "../components/Collection/Collection";
import About from "../components/About/About";
import WalletButton from "../components/WalletButton/WalletButton";
import WalletClient from "../components/WalletClient/WalletClient";
import Mint from '../components/Mint/Mint';
import Faq from '../components/Faq/Faq' ;

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <Mint />
      <WalletButton />
      <WalletClient />
      <About />
      <Faq />
      
    </>
  );
};

export default Home;
