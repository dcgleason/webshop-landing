import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  [
    {
      question: 'Why choose ServiceNow Career Builders (BeyondNow LLC) for ServiceNow career growth?',
      answer:
        "BeyondNow is spearheaded by Dan Gleason, a ServiceNow expert with over 4 years of experience, and is the LLC behind ServiceNow Career Builders. ServiceNow Career Builders is tailored to the ServiceNow ecosystem, and in the community you get access to personalized knowledge sharing sessions, group masterminds calls, etc. Dan's expertise extends to group calls where collective insights and strategies are shared. LinkedIn: https://www.linkedin.com/in/dcgleason/"
    },
    {
      question: 'What services does ServiceNow Career Builders provide?',
      answer: 'ServiceNow Career Builders community offers comprehensive career coaching & skill development services including resume optimization tips, LinkedIn-networking strategies, exclusive personalized ServiceNow knowledge transfer sessions from experienced SN devs, and more to help you meet your career goals more quickly.'
    },
  ],
  [
    {
      question: 'How can I contact Dan at BeyondNow LLC / ServiceNow Career Builders?',
      answer: "After subscribing, you'll have access to a link to book time with Dan. You can also email him at dan@beyondnow.services."
    },

  ],
  [
    {
      question: 'Does BeyondNow LLC offer refunds?',
      answer: 'While refunds are not available, you have the flexibility to cancel your subscription anytime should your needs or goals change.'
    },
    {
      question: 'I have additional questions. How can I get in touch?',
      answer: 'Welcome to email Dan at dan@beyondnow.services at any point if you have questions.'
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
