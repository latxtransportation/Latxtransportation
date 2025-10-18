

import Hero from "@/components/hero";
import Programs from "@/components/programs";
import Head from "next/head";



export default function Home() {
  return <main className="min-h-screen">
 <Head>
  <title>Latxtransportation | Safe & Reliable Rides</title>
  <meta
    name="description"
    content="LATX Transportation — providing safe, compassionate non-emergency medical transport in Central Texas."
  />
  <meta property="og:title" content="Latxtransportation | Safe & Reliable Rides" />
  <meta
    property="og:description"
    content="LATX Transportation — providing safe, compassionate non-emergency medical transport in Central Texas."
  />
  <meta property="og:url" content="https://www.latxtransportation.com" />
  <meta property="og:site_name" content="Latxtransportation" />
 
  <meta name="twitter:card" content="summary_large_image" />
</Head>


    <Hero />
    <Programs />  
    </main>;
  
}
