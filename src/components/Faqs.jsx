import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  [
    {
      question: 'Why Webshop Wizards?',
      answer:
      "Good question! The average annual pay for a full-time Senior Javascript developer is $120,000(+), not including benefits, etc. We charge $33,558 (annual plan) per year for the work of two Senior JavaScript developers. Additionally, with the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying when you have work that needs to be done."
    },
    {
      question: 'Who are the developers?',
      answer:
        "You might be surpised to hear this, but Webshop Wizards is comprised of its two founders... and that is it! After meeeting while working at IBM, we decided to offer our services to other companies. We keep up with work by limiting the number of clients we agree to take on.",
    },
    
    {
      question: 'What technologies do you work with?',
      answer: 'We are experts working with the following languages / libraries / frameworks / databases: Javascript, React.js, Express.js, Node.js, TailwindCSS, Next.js, MongoDB, and AWS S3. We also work with no-code / low-code software like Zapier, Webflow, Airtable, and Shopify. Please reach out if you have any questions regarding your specific tech stack.',
    },
    {
      question: 'Do you offer web design services?',
      answer: 'We are JavaScript developers only, and so unfortunately, do not offer web design services. We can, however, work with your existing designs and implement them into your web app.',
    },
    {
      question: 'Do you take equity as a form of compensation for your services?',
      answer: 'We do! For select clients, we will take equity as a form of partial payment. If you are interested in this option,  please email us at dan@webshopwizards.com',
    },
  
  ],
  [
    {
      question: 'Is there a limit to how many requests I can make?',
      answer: 'Once subscribed, you can make as many requests as you like, and they will be delivered via weekly sprints. ',
    },
   
    {
      question: 'How fast will my requests be fulfilled?',
      answer:
        'We commit to ~13 points of work per week per client and only take on a limited number of clients to keep our sprint velocity high.',
    },
    {
      question: 'How do you work with existing code repositories?',
      answer:
        'If you have an existing code repo, if it is Javascript-based, we can work with it and can do the work via Gitlab, Github, Bitbucket, etc. We also create a new code repository for you if need be, or multiple.',
    },
    {
      question: 'Are the costs of hosting and purchasing domain names included?',
      answer:
        'No, the costs of hosting and purchasing domain names are not included in our monthly fee. We can, however, help you set up your domain name and hosting if you need assistance.',
    },
  
  ],
  [
    {
      question:
        'How do I make requests for the development of features and changes?',
      answer:
        'Webshop Wizards use Trello boards. You can request features by writing them directly via a Trello. You can also share links to Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out) directly in a Trello card. Basically, if it can be linked to or shared in a Trello board card, we can work with it.',
    },
    {
      question:
        "Are there refunds if I don't like the service?",
      answer:
        "We do not offer refunds. We do, however, allow you to only pay for the months you need our services, and pay each month if you are fully satisfied with the work delivered. If you are not satisfied, you can cancel your subscription at any time.",
    },
    {
      question:
        "How do you deal with big or complex requests?",
      answer:
        "We work in an Agile fashion. Each request you add to your Trello board backlog is broken down into tasks (each task assigned a point value based on complexity) and each task is assigned to a 1-week sprint. Your work is delivered weekly at a rate of roughly 13 points per week (1 point is about 4 hours of work). If you have any questions about our pointing system, feel free to reach out to us at dan@webshopwizards.com.",
    },
    {
      question:
        "Do you do mobile app development?",
      answer:
        "Yes, we do! We can build mobile apps using React Native.",
    },
    {
      question:
        "What are some recent projects you've worked on?",
      answer:
        "Most recently, tackled a complex Gmail / Node.js integration and set up a custom Stripe integrations using React.js / Node on a custom landing page we built.",
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
    <Image
      className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
      src={backgroundImage}
      alt=""
      width={1558}
      height={946}
      unoptimized
    />
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
