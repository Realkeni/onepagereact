import Head from "next/head";
import Image from "next/image";
import Home from "@/components/header";
import Countdown from "@/components/countdown";
import Note from "@/components/note"
import Map from "@/components/map"
import Information from "@/components/information";
import Footer from "@/components/footer";


const onePage = () => {
    return (
      
<div>
 <Head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>onePAGE website</ title>
</ Head>
          <Home />
          <Countdown />
          <Note />
          <Map />
          <Information />
          <Footer />
          
      </div>
      
    )
};

export default onePage 