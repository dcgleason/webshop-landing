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
          <title>BeyondNow: Reverse Recruiting for ServiceNow Professionals</title>
          <meta
            name="description"
            content="BeyondNow is a reverse recruitment firm that manages your ServiceNow job search for you by optimizing your resume & LinkedIn profile, networking with key decision makers for you at companies on your behalf, and appling to hand-picked, approved-of ServiceNow jobs for you."
          />
          <meta name="keywords" content="IT Consulting, ServiceNow, Subscription, Reverse Recruiting, Reverse Recruiter, job search"/>
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
