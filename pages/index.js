import Head from "next/head";

// import Image from "next/image";
// import Link from "next/link";

import Navtop from "../components/Layout/Navtop";
import Navbuttom from "../components/Layout/Navbuttom";
import Header from "../components/Layout/Header";
import Section_card from "../components/UI/Section_card";
import Section_image from "../components/UI/Section_image";
import Section_Image_Carousel from "../components/UI/Section_Image_Carousel";
import Footer from "../components/Layout/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Phop Automation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navtop />
      <Navbuttom />
      <Header />
      <Section_card />
      <Section_image />
      <Section_Image_Carousel/>
      <Footer />
    </>
  );
}
