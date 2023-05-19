import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Why Webshop Wizards?',
      answer:
      "Good question! The average annual pay for a Shopify developer is $80,000. We charge $23,940 per year. Additionally, with the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying when you have work that needs to be done."
    },
    {
      question: 'Is there a limit to how many requests I can make?',
      answer: 'Once subscribed, you can make as many requests as you like, and they will be delivered one by one.',
    },
  
  ],
  [
    {
      question: 'Who are the developers and designers?',
      answer:
        'You might be surpirsed to hear this, but Webshop Wizards is actually a family business. We are two brothers, one a product designer and the other an experienced web developer.',
    },
    {
      question: 'How fast will I get my finished store?',
      answer:
        'A fully customized theme can take upwards of three days to complete (in order to ensure very fast response and turnaround times, we only take on a small number of clients at a time).',
    },
  
  ],
  [
    {
      question:
        'How do I make requests for design and development features and changes?',
      answer:
        'Webshop Wizards offer a ton of flexibility in how you request make requests using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, we can work with it.',
    },
    {
      question:
        "Are there refunds if I don't like the service?",
      answer:
        'Due to the high quality nature of the work, there will be no refunds.',
    },
  ],
]

export function Faqs() {
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
           If you have questions not listed here, please email us at <a className="underline"href="mailto:dan@webshopwizards.com">this email address</a> , and we will get back to you as soon as possible.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
