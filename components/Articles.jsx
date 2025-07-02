import Image from 'next/image';
import { articles } from "@/Data/Dummydata";

export default function Articles() {
  return (
    <section className="px-32 py-8 bg-[#FAFAFA] ">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-[#645674]">Featured Articles</h2>
        <p className="text-[#333333] md:text-lg font-semibold font-lg max-w-2xl mx-auto mb-10">
          Curated reflections on faith, connection, healing, and hope, written to gently meet you where you are. Stories that speak softly. Words that hold you close.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] radius-[8px] ">
        {articles.map((article) => (
          <div key={article.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-4 bg-white shadow-lg ">

              <div className="text-[11px] text-gray-500 flex items-center gap-2 mb-1">
                <span className="font-medium shadow-sm text-black border-1 border-black rounded-[12px] px-2 py-0.5">{article.category}</span>
                <span className="text-xs ">{article.time}</span>
              </div>

              <h3 className="text-black font-bold text-xl mb-5 ">
                {article.title}
              </h3>
              <button className="bg-[#3566A0] text-white px-4 py-2 text-sm rounded hover:bg-blue-600">
                Read &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button className="bg-[#3566A0] text-white px-6 py-2 rounded mb-15 hover:bg-blue-700">
          See More Articles &rarr;
        </button>
      </div>
    </section>
  );
}
