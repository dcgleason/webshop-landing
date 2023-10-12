import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { useEffect } from 'react'

export default function Home() {


  return (
    <>
        <Head>
          <title>BeyondNow: ServiceNow IT Consulting on demand</title>
          <meta
            name="description"
            content="BeyondNow: ServiceNow IT Consulting on demand with a 24-hour response time."
          />
          <meta name="keywords" content="IT Consulting, ServiceNow, Subscription-based, Government, Contracts, ServiceNow Develoepr, Time-block agreement, Ongoing Service"/>
      </Head>
      <Header />

      <main>
        <Hero />
        {/* <iframe 
          src="https://www.videoask.com/fb10tlp6v" 
          allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;" 
          width="100%" 
          height="600px" 
          style={{border: 'none', borderRadius: '24px'}}
        ></iframe> */}

        {/* <PrimaryFeatures /> */}
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
