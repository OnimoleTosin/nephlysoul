import Image from 'next/image';
import { books, articles } from "@/Data/Dummydata" ;

export default function Features() {
  return (
    <section className="px-32 py-8 bg-[#FAFAFA]">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-black">Featured Articles</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper pellentesque ut. Nam sed non nullam nisl non pulvinar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-gray-100 rounded-lg overflow-hidden shadow">
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-blue-600">{article.category}</span> · {article.time}
              </div>
              <h3 className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2">
                {article.title}
              </h3>
              <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-600">
                Read &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button className="bg-blue-500 text-gray-800 px-6 py-2 rounded ">
          See More Articles &rarr;
        </button>
      </div>


      <div className="py-10 px-4 bg-[#FAFAFA]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#645674]">Featured Books</h2>
          <p className="text-black max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper pellentesque ut. Nam sed non nullam nisl non pulvinar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="relative w-full h-60 mb-4">
                <Image
                  src={book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>

              <div className="text-sm text-gray-500 flex items-center gap-2 mb-1">
                <span className="bg-gray-200 rounded px-2 py-0.5">{book.tag}</span>
                <span className="text-xs text-blue-600">{book.badge}</span>
              </div>

              <h3 className="text-md font-semibold text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>

              <div className="flex items-center justify-between mt-2 text-sm">
                <div className="flex items-center gap-1 text-yellow-500">
                  {'⭐'.repeat(Math.floor(book.rating))}
                  <span className="text-gray-600 ml-1">{book.rating}</span>
                </div>
                <span className="text-gray-400">{book.views}</span>
              </div>

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
      </div>
    </section>
  );
}
