import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Why Webshop Wizards?',
      answer:
      "Good question! The average annual pay for a developer and designer combined is $200,000(+). We charge $29,940 per year. Additionally, with the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying when you have work that needs to be done."
    },
    {
      question: 'Is there a limit to how many requests I can make?',
      answer: 'Once subscribed, you can make as many requests as you like, and they will be delivered one by one. ',
    },
  
  ],
  [
    {
      question: 'Who are the developers and designers?',
      answer:
        "You might be surpised to hear this, but Webshop Wizards is actually a family business. We're a small team, two brothers -- one a Senior Designer and one a Senior Developer. What this means is that you'll work directly with us, the founders of Webshop Wizards.",
    },
    {
      question: 'How fast my requests be fulfilled?',
      answer:
        'Each request takes, on average, a 1-2 business days to complete (in order to ensure very fast response and turnaround times, we only take on a small number of clients at a time). We work on your requests 1-by-1.',
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
    {
      question:
        "How does the point system work?",
      answer:
        "Whenever you add more requests do your Trello board queue, we break the requests down into smaller tasks, if need be,  and assign a point value to each task (the simpler the task the lower the point value). The rate at which we complete tasks for you is about 1-2 per day depending on their point value. We complete your highest-priority tasks first. If you have any questions about the point system, please email us at dan@webshopwizards.com",
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
           If you have questions not listed here, please email us at <a className="underline"href="mailto:dan@webshopwizards.com">dan@webshopwizards.com</a> , and we will get back to you as soon as possible.
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
