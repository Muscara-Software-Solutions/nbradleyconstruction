const testimonials = [
  {
    body: `Nate was so wonderful to work with! He took my vision and brought it to life while providing his own expertise to ensure we were happy with the final product.`,
    author: {
      name: 'Alyssa Combs',
      handle: 'alyssa.paxson.5',
      imageUrl: '/alyssa.jpeg',
    }
  },
  {
    body: `Nate was very kind and professional! They did a great job on our drywall in our basement that needed to be fixed after a flood cut from the floor up! He was also reasonably priced and worked quickly!`,
    author: {
      name: 'Rachel Joebgen',
      handle: 'RachelKlosterman',
      imageUrl: '/rachel.jpeg'
    }
  },
  {
    body: `He was extremely respectful of our home. He was also super quiet which is impressive with the nature of the job. Truly, I kept forgetting he was here, which is a huge compliment in my book.`,
    author: {
      name: 'Kara Balzano',
      handle: 'kara.neel1',
      imageUrl: '/kara.jpeg'
    }
  },
  {
    body: `So kind and helpful! Got the job done in a timely manner. Would definitely recommend. Priced very well and we got exactly what we were looking for.`,
    author: {
      name: 'Angela Funk Wilking',
      handle: 'angela.funk.5',
      imageUrl: '/angela.jpeg'
    }
  },
  {
    body: `I definitely recommend Nate! ⭐️⭐️⭐️⭐️⭐️ he was very thorough and did a wonderful job making my vision become reality in our hallway and bedroom. Can’t wait to use him for all our future home projects!`,
    author: {
      name: 'Jennifer Lauren',
      handle: 'jen.baum.9',
      imageUrl: '/jennifer.jpeg'
    }
  },
  {
    body: `Nate did a wonderful job on my bathroom, was super easy to work with, (even when I changed my mind on a couple of things), and very affordable! Thanks Nate!`,
    author: {
      name: 'Cheryl Carter Brown',
      handle: 'cheryl.carterbrown',
      imageUrl: '/cheryl.jpeg'
    }
  }
]

export default function Review() {
  return (
    <div className="bg-white py-12 sm:py-16" id="review">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with tons of amazing people, see what they have to say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
