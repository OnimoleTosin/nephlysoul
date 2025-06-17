// Import Next.js Image component for optimized image rendering
import Image from 'next/image'
import Books from "@/assets/Books.png"
// Dummy data for books
const books = Array(6).fill({
  id: 1,
  title: 'The 21 Irrefutable Laws of Leadership Revised',
  author: 'John C. Maxwell',
  image: Books, // Make sure this path is correct
  rating: 4.5,
  tag: 'Faith',
  badge: 'Recently added',
  views: '20 people viewing now',
})

export default function FeaturedBooks() {
  return (
    <section className="py-10 px-4 bg-[#FAFAFA]">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#645674]">Featured Books</h2>
        <p className="text-black max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper pellentesque ut. Nam sed non nullam nisl non pulvinar.
        </p>
      </div>

      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {books.map((book, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            {/* Book Cover */}
            <div className="relative w-full h-60 mb-4">
              <Image
                src={book.image}
                alt={book.title}
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>

            {/* Book Info */}
            <div className="text-sm text-gray-500 flex items-center gap-2 mb-1">
              <span className="bg-gray-200 rounded px-2 py-0.5">{book.tag}</span>
              <span className="text-xs text-blue-600">{book.badge}</span>
            </div>

            {/* Title */}
            <h3 className="text-md font-semibold text-gray-800">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>

            {/* Rating and views */}
            <div className="flex items-center justify-between mt-2 text-sm">
              <div className="flex items-center gap-1 text-yellow-500">
                {/* You can use an icon component like Lucide or Heroicons here */}
                {'⭐'.repeat(Math.floor(book.rating))} 
                <span className="text-gray-600 ml-1">{book.rating}</span>
              </div>
              <span className="text-gray-400">{book.views}</span>
            </div>

            {/* Read Button */}
            <button className="mt-4 bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 text-sm">
              Read &rarr;
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-gray-300">
                See More Books &rarr;
              </button>
            </div>
    </section>
  )
}
