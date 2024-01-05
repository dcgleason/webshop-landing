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
          <title>BeyondNow LLC: Career consulting for ServiceNow Professionals</title>
          <meta
            name="description"
            content="BeyondNow LLC is a career consulting agency that helps you through your ServiceNow job search & career challenges by optimizing your resume, helping you improve you LinkedIn presence, consulting you through effective networking strategies that get you referrals, and providing you interview & negotiation prep."
          />
          <meta name="keywords" content="IT Consulting, ServiceNow, Subscription, Career Consulting, Reverse Recruiter, job search"/>
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
