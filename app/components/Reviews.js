import Image from 'next/image'
import React from 'react'

const reviewsData = [
  {
    name: 'Ann Smith',
    position: 'CEO & Founder',
    imageSrc: '/test-2.svg',
    reviewText: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies metus eu euismod tincidunt. Aliquam
      sit amet sapien non nisl tempor convallis eu in enim.”`
  },
  {
    name: 'John Doe',
    position: 'Designer',
    imageSrc: '/test-1.svg',
    reviewText: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies metus eu euismod tincidunt. Aliquam
      sit amet sapien non nisl tempor convallis eu in enim.”`
  },
  {
    name: 'Jane Doe',
    position: 'CEO & Founder',
    imageSrc: '/test-2.svg',
    reviewText: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies metus eu euismod tincidunt. Aliquam
      sit amet sapien non nisl tempor convallis eu in enim.”`
  }
]

function Reviews() {
  return (
    <section className=''>
      <div className='main flex flex-wrap justify-center gap-10 mt-20'>
        {reviewsData.map((review, index) => (
          <article key={index} className='bg-white p-6 rounded-lg max-w-xs w-full'>
            <div className='flex justify-center mb-6'>
              <Image
                src={review.imageSrc}
                alt={`${review.name} profile image`}
                height={100}
                width={100}
                className='rounded-full'
              />
            </div>
            <h3 className='text-2xl font-semibold text-center mb-2'>{review.name}</h3>
            <p className='text-center text-gray-500 mb-4'>{review.position}</p>
            <p className='text-gray-700 text-center'>{review.reviewText}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
