import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  [
    {
      question: 'Why BeyondNow LLC?',
      answer:
      "Good question! BeyondNow is all about getting you 24/7 access to seasoned ServiceNow professionals to solve urgent technical issues that can't wait (we boast 60-minute max response time). We don't offer long-term contracts, so say if your ServiceNow needs slows... you are able to cancel or pause your subscription at any time. ",
    },
    {
      question: 'Who are the technical support engineers?',
      answer:
        "You might be suprirsed to hear this, but at the moment BeyondNow LCC is a firm of 1 person. I'm Dan (https://www.linkedin.com/in/dcgleason/), and I'm a Senior ServiceNow Engineer who has worked for IBM, the U.S. Department of Health & Human Services, and the U.S. Department of State. I've been working with ServiceNow for 5 years, and was trained as a full-stack developer before that. I'm a certified ServiceNow System Administrator, Application Developer, with experience in ITSM, ITAM, CMDB, Service Portal and custom app development and integrations.",
    },
    
    {
      question: 'What technologies do you work with?',
      answer: 'ServiceNow, Medidata, Active Directory, Okta, Jira, Trello, Slack, Github, mainly.',
    },
    
    {
      question: 'How do I block off time once onboarded?',
      answer: 'We send you a Calendly link, where you can book your first meeting and subsequent hours needed.',
    }
  
  
  ],
  [
   
    {
      question: 'How you get access to our ServiceNow instances?',
      answer:
        'This is, in part, up to you. You can have an admin grant me "side door" access to your instance, or I can work with you to set up a user account via your SSO provider (Okta, Active Directory, etc.).',
    },
    {
      question: 'Do BeyondNow technical support engineers have U.S. government clearnances?',
      answer:
        'Yes -- Dan has a secret clearance.',
    },
    {
      question: 'What if I need more hours?',
      answer:
        'You can purchase more hours at any time, and they will be added to your account.',
    },
    {
      question: 'How do you handle urgent requests?',
      answer:
        'BeyondNow works to ensure that there are always hours available for same day and next day work.',
    },
  ],
  [
    {
      question:
        'How do I make requests if you work async?',
      answer:
      'You can make requests via your dedicated Trello board or via solely within your ServiceNow instance once access has been granted.',
    },
    {
      question:
        "Do you offer refunds?",
      answer:
        "You are allowed a full refund if you decide within the first 5 hours of work that the fit is not there.",
    },
    {
      question:
        "How long do my purchased hours last?",
      answer:
        "Your purchased hours last for 1 year, 12 months, from your date of purchase.",
    },
    {
      question: 'How far in advance can I book hours?',
      answer:
      'You can schedule your hours as far in advance as you would like, within a 12 month period (from your date of purchase).',
    },


  ],
]

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
