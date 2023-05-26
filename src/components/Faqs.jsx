import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Why Webshop Wizards?',
      answer:
      "Good question! The average annual pay for a JS developer hired via a typical agency is $67,000(+). We charge $41,340 per year for the work of two senior JavaScript developers. Additionally, with the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying when you have work that needs to be done."
    },
    {
      question: 'Is there a limit to how many requests I can make?',
      answer: 'Once subscribed, you can make as many requests as you like, and they will be delivered one by one. ',
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We are experts working with the following languages / libraries / frameworks / databases : Javascript, React.js, React Native, Express.js, Node.js, TailwindCSS, Next.js, MongoDB, and AWS S3.',
    },
    {
      question: 'Do you offer web design services?',
      answer: 'We are JavaScript developers only, and so unfortunately, do not offer web design services. We can, however, work with your existing designs and implement them into your web app.',
    },
  
  ],
  [
    {
      question: 'Who are the developers?',
      answer:
        "You might be surpised to hear this, but Webshop Wizards is comprised of its two founderes, Manny and Dan, and that is it. After meeeting while working at IBM, we decided to offer our services to other companies. Together, we've orked on projects for IBM, the U.S. Department of Health & Human Services, the U.S. Department of State, and more.",
    },
    {
      question: 'How fast will my requests be fulfilled?',
      answer:
        'Each request takes, on average, a 1-2 business days to complete (in order to ensure very fast response and turnaround times, we only take on a small number of clients at a time). We work on your requests 1-by-1.',
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
        'How do I make requests development features and changes?',
      answer:
        'Webshop Wizards use Trello boards. Some clients request designs by writing them directly via Trello. Some share links to Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out) directly in Trello request task. Basically, if it can be linked to or shared in a Trello board card, we can work with it.',
    },
    {
      question:
        "Are there refunds if I don't like the service?",
      answer:
        "Due to the high quality nature of the work, there will be no refunds.",
    },
    {
      question:
        "How does the Agile point system work?",
      answer:
        "Each request you add to your Trello board queue is broken down into tasks (each task assigned a point value based on complexity) within 12 hours. We complete requests generally in 1-2 business days after they are pointed depending on their complexity. If you have any questions about our pointing system, feel free to reach out to us at dan@webshopwizards.com.",
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
