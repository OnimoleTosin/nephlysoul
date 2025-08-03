import Image from 'next/image';
import { articles } from "@/Data/Dummydata";
import Link from "next/link";

export default function Articles() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 bg-[#FAFAFA] font-sans">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#645674] mb-4">Featured Articles</h2>
        <p className="text-[#333333] text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto">
          Curated reflections on faith, connection, healing, and hope, written to gently meet you where you are.
          Stories that speak softly. Words that hold you close.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform duration-300 hover:scale-102">
            <div className="overflow-hidden h-[200px]">
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={220}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="text-[11px] text-gray-500 flex items-center gap-2 mb-1">
                <span className="font-medium text-black border border-black rounded-full px-2 py-0.5">{article.category}</span>
                <span className="text-xs">{article.time}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                {article.title}
              </h3>
              <button className="bg-[#3566A0] text-white px-4 py-2 text-sm rounded hover:bg-blue-600 transition">
                Read &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#3566A0] text-white px-6 py-2 text-sm sm:text-base rounded hover:bg-blue-700 transition">
          <Link href = "/Forum/articles">
          See More Articles &rarr;
          </Link>
        </button>
      </div>
    </section>
  );
}
