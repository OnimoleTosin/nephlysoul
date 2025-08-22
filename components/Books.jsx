"use client"
import Image from 'next/image';
import { books } from "@/Data/Dummydata";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Books() {
  const router = useRouter();

  const seeMore = () => {
    router.push('/Resource');
  }

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 bg-[#FAFAFA] font-sans">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#645674]">Featured Books</h2>
        <p className="text-[#333333] text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto">
          Explore handpicked devotionals, soulful reads, and comforting books chosen to uplift, guide, and gently walk with you.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-102"
          >
            <div className="relative w-full h-60 mb-4">
              <Image
                src={book.image}
                alt={book.title}
                layout="fill"
                objectFit="contain"
                className="rounded transition-transform duration-300 hover:scale-102"
              />
            </div>

            <div className="text-sm text-gray-500 flex items-center gap-2 mb-3">
              <span className="font-medium text-black border border-black rounded-full px-2 py-0.5 text-xs">
                {book.tag}
              </span>
              <span className="text-xs">{book.badge}</span>
            </div>

            <h3 className="text-lg font-bold text-black mb-1">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{book.author}</p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col items-start md:items-center">
                <div className="flex items-center text-yellow-500">
                  {'⭐'.repeat(Math.floor(book.rating))}
                  <span className="text-black text-xs ml-1">{book.rating}</span>
                </div>
                <span className="text-black text-xs">({book.views})</span>
              </div>

              <button
                onClick={seeMore}
                className="bg-[#3566A0] text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition w-full md:w-auto text-center">
                Read &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button onClick={seeMore} className="bg-[#3566A0] text-white px-6 py-2 text-sm sm:text-base rounded hover:bg-blue-700 transition">
          <Link href ="/Resource">
          See More Books &rarr;
          </Link>
        </button>
      </div>
    </section>
  );
}
