import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  [
    {
      question: 'Why BeyondNow?',
      answer:
      "Good question! The average Senior Developer can cost upwards of $75/hr. I offer the same level of expertise at a fraction of the cost, just $6,000/month for unlimited hours and requests.",
    },
    {
      question: 'Who are the developers?',
      answer:
        "You might be suprirsed to hear this, but at the moment SN Wizards is a shop of 1 person. I'm Dan, and I'm a Senior ServiceNow Engineer who has worked for IBM, the U.S. Department of Health & Human Services, and the U.S. Department of State. I've been working with ServiceNow for 5 years, and was trained as a full-stack developer before that. I'm a certified ServiceNow System Administrator, Application Developer, with experience in ITSM, ITAM, CMDB, and custom app development and integrations.",
    },
    
    {
      question: 'What technologies do you work with?',
      answer: 'ServiceNow, Medidata, Active Directory, Okta, Jira, Trello, Asana, Slack, Github, mainly.',
    }
  
  ],
  [
    {
      question: 'Is there a limit to how many requests I can make?',
      answer: 'Once subscribed, you can make as many requests as you like, and they will be delivered via your sprint cycle, or our 1-week sprints.', 
    },
   
    {
      question: 'How fast will my requests be fulfilled?',
      answer:
      'Requests will be responded to within 24 hours, and will be delivered as quickly as possible within the hours you block off.',
    },
    {
      question: 'How you get access to our ServiceNow instances?',
      answer:
        'This is, in part, up to you. You can have an admin grant me "side door" access to your instance, or I can work with you to set up a user account via your SSO provider (Okta, Active Directory, etc.).',
    },
    {
      question: 'Do you have any Government clearances?',
      answer:
        'Yes, I have a Secret clearance.',
    },
  ],
  [
    {
      question:
        'How do I make requests if you work async?',
      answer:
        'We will join your meetings if you prefer, but we also work async. You can make requests via your existing project management tool, like Jira, or via a Trello board I give to you.',
    },
    {
      question:
        "Are there refunds if I don't like the service?",
      answer:
        "We do not offer refunds. We do, however, allow you to only pay for the months you need and love our services. You can also choose to cancel your subscription at any point.",
    },
    {
      question:
        "How do you deal with big or complex requests?",
      answer:
        "We work in an Agile fashion. Each request you add is broken down into tasks (each task assigned a point value based on complexity) and each task is assigned to a sprint. Your work is delivered weekly at a rate of roughly 13 points per week (1 point is about 4 hours of work). If you have any questions about our pointing system, feel free to reach out to us at dan@snwizards.com.",
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
          If you have questions not listed here, please email us at <a className="underline" href="mailto:dan@webshopwizards.com">dan@webshopwizards.com</a> , and we will get back to you as soon as possible.
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
