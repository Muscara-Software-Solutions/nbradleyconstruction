import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  { name: 'Home Repairs', },
  { name: 'Home Renovations', },
  { name: 'Shed Installation'},
  { name: 'Paint Jobs' }
]

export default function Service() {
  return (
    <div className="bg-white py-12 sm:py-16" id='service'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            {/* <h2 className="text-base font-semibold leading-7 text-gray-600">Our</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We do everything from interior trim and cabinets to window replacement. Message or email us for your home repairs!
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-gray-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                {/* <dd className="mt-2">{feature.description}</dd> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
