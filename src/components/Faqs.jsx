import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  [
    {
      question: 'Why Dan Gleason?',
      answer:
        "Dan is a seasoned ServiceNow professinoal with 5 years of exerpience in the ServiceNow industry as a developer. Dan specializes in career consulting exclusively for the ServiceNow domain. Offering personalized career strategies, his aim is to place you in roles that align with your goals and expertise. LinkedIn: https://www.linkedin.com/in/dcgleason/"
    },

    {
      question: 'What can Dan help you with?',
      answer: 'A range of services including resume optimization, LinkedIn strategy consulting, targeted networking, interview preparation, and more are offered.'
    },
   
  ],
  [
    {
      question: 'How do I get in touch with Dan?',
      answer: 'Upon subscribing to one of the plans, you will receive direct contact details for Dan, including a cell phone number and email for easy communication.'
    },

    {
      question: 'How does the weekly strategy call work?',
      answer: 'The weekly strategy call, available only in the Premium tier, allows for a sync up to review progress, and adapt strategies based on any changes or feedback.'
    }
  ],
  [
    {
      question: 'Do you offer refunds?',
      answer: 'Refunds are not offered. However, if dissatisfied, you can cancel your subscription at any time.'
    },
    {
      question: 'What modes of communication will you use?',
      answer: 'Communication is facilitated via email, phone, and live chat during business hours, with all correspondences aimed to be responsive and efficient.'
    }
  ]
];


export function Faqs() {
  const [activeIndex, setActiveIndex] = useState();

  const handleClick = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <section
    id="faq"
    aria-labelledby="faq-title"
    className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
  >
    {/* <Image
      className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
      src={backgroundImage}
      alt=""
      width={1558}
      height={946}
      unoptimized
    /> */}
    <Container className="relative">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
          id="faq-title"
          className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          If you have questions not listed here, please email us at <a className="underline" href="mailto:dan@webshopwizards.com">dan@beyondnow.services</a> , and we will get back to you as soon as possible.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
      >
        {faqs.map((column, columnIndex) => (
    <li key={columnIndex}>
      <ul role="list" className="flex flex-col gap-y-8">
        {column.map((faq, faqIndex) => {
          const index = `${columnIndex}-${faqIndex}`;
          return (
            <li key={faqIndex}>
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  {faq.question}
                </h3>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className="text-slate-700"
                />
              </div>
              <p className={`mt-4 text-sm text-slate-700 ${activeIndex === index ? '' : 'hidden'}`}>
                {faq.answer}
              </p>
            </li>
          );
        })}
    </ul>
  </li>
))}
      </ul>
    </Container>
  </section>
  )
}
