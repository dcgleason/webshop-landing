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
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Home() {

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch("/api/checkout_sessions", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
      console.log('clientSecret', clientSecret);
  }, []);



  return (
    <>
        <Head>
          <title>BeyondNow LLC: Reverse Recruiting for ServiceNow Professionals</title>
          <meta
            name="description"
            content="BeyondNow LLC is a reverse recruiting agency that helps you through your ServiceNow job search & career challenges by optimizing your resume, helping you improve you LinkedIn presence, consulting you through effective networking strategies that get you referrals, providing you interview & negotiation prep, and applying to jobs for you."
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
        <Pricing stripePromise={stripePromise} setClientSecret={setClientSecret} clientSecret={clientSecret} />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
