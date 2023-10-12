import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      {/* SVG content */}
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className
      )}
    >
      {/* SVG content */}
    </svg>
  )
}

function Plan({ name, price, description, href, features, featured = false }) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl p-6 sm:p-8',
        featured ? 'order-first bg-[#235373] py-8 lg:order-none' : 'lg:py-8'
      )}
    >
      {/* Plan content */}
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          {/* Heading content */}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-xl sm:mx-auto lg:max-w-none xl:mx-0">
          <Plan
            name="50  Hours"
            price="$4,495"
            description="Payment plans available."
            href="https://calendly.com/beyondnow-sn/30min"
            features={[
              /* Features list */
            ]}
          />
          <Plan
            featured
            name="100 Hours"
            price="$8,995"
            description="Payment plans available."
            href="https://calendly.com/beyondnow-sn/30min"
            features={[
              /* Features list */
            ]}
          />
          <Plan
            name="200 Hours"
            price="$17,995"
            description="Payment plans available."
            href="https://calendly.com/beyondnow-sn/30min"
            features={[
              /* Features list */
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
