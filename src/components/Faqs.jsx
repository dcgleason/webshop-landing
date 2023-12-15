import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  [
    {
      question: 'Why choose BeyondNow for ServiceNow career growth?',
      answer:
        "BeyondNow is spearheaded by Dan Gleason, a ServiceNow expert with over 5 years of experience. Dan's career consulting and reverse recruiting is tailored to the ServiceNow ecosystem, providing personalized strategies to position you in roles that best fit your career ambitions. Dan's expertise extends to group calls where collective insights and strategies are shared. LinkedIn: https://www.linkedin.com/in/dcgleason/"
    },
    {
      question: 'What services does BeyondNow provide?',
      answer: 'BeyondNow offers comprehensive career services including resume optimization, LinkedIn strategy, networking tactics, interview prep, strategy calls for collaborative learning and support, and reverse recruitment.'
    },
  ],
  [
    {
      question: 'How can I contact Dan at BeyondNow?',
      answer: "After subscribing, you'll get direct access to Dan via email and will be able to ask questions and receive tailored advice on your weekly strategy calls."
    },
    {
      question: 'What is the structure of the weekly strategy call?',
      answer: 'The strategy call is a premium feature where you can receive tailored advice to refine their career strategies.'
    }
  ],
  [
    {
      question: 'Does BeyondNow offer refunds?',
      answer: 'BeyondNow values your satisfaction; while refunds are not available, you have the flexibility to cancel your subscription anytime should your needs change.'
    },
    {
      question: 'Which communication methods does BeyondNow use?',
      answer: 'BeyondNow ensures seamless interaction through email and live group calls, striving for prompt and effective communication during business hours.'
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
