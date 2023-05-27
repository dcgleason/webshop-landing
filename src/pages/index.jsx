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

  useEffect(() => {
    // load the script once after the component has mounted
    window.WIDGET_CONFIG = {
      globalWidgetId: '6aa1a27f-8ab5-4b97-a347-98866b7deef7',
      baseUrl: 'https://app.warmwelcome.com',
    };

    const script = document.createElement('script');
    script.src = 'https://d7a97ajcmht8v.cloudfront.net/production/app.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
        <Head>
          <title>Webshop Wizards: Premium JS Web Development Services</title>
          <meta
            name="description"
            content="Webshop Wizards is a flexible, subscription-based web development and design agency. We prioritize user-friendly solutions without compromising accuracy, and provide ongoing service billed monthly. Experience the magic of our subscription-based services today."
          />
          <meta name="keywords" content="Web Development, Design, Subscription-based, Webshop Wizards, E-commerce, Startups, User Research, UX/UI, Online Store, SEO, User-friendly, Ongoing Service"/>
      </Head>
      <Header />

      <main>
        <Hero />
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
