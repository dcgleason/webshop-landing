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
        "BeyondNow specializes in reverse recruiting services exclusively for the ServiceNow domain. We offer personalized career strategies, aiming to place you in roles that align with your goals and expertise. No long-term commitments are required; you can pause or cancel your subscription at any time."
    },
    {
      question: 'Who are the Reverse Recruiters?',
      answer:
        "You might be surprised to hear this, but BeyondNow LLC is a team of 1. Dan Gleason is an experienced professional in the ServiceNow industry with a strong US-based network."
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer a range of services including job handpicking, resume optimization, LinkedIn profile enhancement, targeted networking, interview preparation, and more. Packages are designed to suit various needs and career stages.'
    },
    {
      question: 'How do I get in touch with my Reverse Recruiter?',
      answer: 'Upon subscribing to one of our plans, you will receive direct contact details for your dedicated Reverse Recruiter, including a cell phone number and email for easy communication.'
    }
  ],
  [
    {
      question: "How many job applications do you apply to for my per week?",
      answer: 'Our aim is to handpick and apply to 3-5 jobs per week on your behalf, ensuring all submissions are tailored to the individual role.'
    },
    {
      question: 'Do you offer any add-on services?',
      answer: 'Yes, for an additional fee, we offer custom services like interview prep with mock interviews, networking with targeted companies, and more.'
    },
    {
      question: 'How does the weekly strategy call work?',
      answer: 'The weekly strategy call is optional but highly recommended. It gives us a chance to sync up, review progress, and adapt our strategy based on any changes or feedback.'
    }
  ],
  [
    {
      question: 'How do you handle networking on my behalf?',
      answer: 'We utilize our extensive industry connections to proactively reach out and introduce you to potential employers and stakeholders, with your approval and direction.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We do not offer refunds. If you are dissatisfied with our service, you can cancel your subscription at any time.'
    },
    {
      question: 'What modes of communication will you use?',
      answer: 'We offer communication via email, phone, and live chat during business hours. All correspondences are aimed to be responsive and efficient.'
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
