import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-[#235373] py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          &quot;[Dan] gave me real truths to the career that I&apos;m grateful for that. [Dan&apos;s] an awesome guy...and really gave me the confidence I needed (throughout the process)&quot;
                    </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            - Adam H., Junior ServiceNow Developer (past client, got a job in 3 weeks)
          </p>
          <Button href="/#pricing" color="white" className="mt-10">
            Apply now
          </Button>
        </div>
      </Container>
    </section>
  )
}
