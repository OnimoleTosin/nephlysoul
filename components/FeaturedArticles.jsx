import Image from 'next/image';
import article1 from "@/assets/article1.png"
import article2 from "@/assets/article2.jpg"
import article3 from "@/assets/article3.jpg"

const articles = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet ipsum dolor sit amet',
    time: '5 mins ago',
    category: 'Faith',
    image: article1
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet ipsum dolor sit amet',
    time: '5 mins ago',
    category: 'Faith',
    image: article2
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet ipsum dolor sit amet',
    time: '5 mins ago',
    category: 'Faith',
    image: article3
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet ipsum dolor sit amet',
    time: '5 mins ago',
    category: 'Faith',
    image: article2
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet ipsum dolor sit amet',
    time: '5 mins ago',
    category: 'Faith',
    image: article3
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet ipsum dolor sit amet',
    time: '5 mins ago',
    category: 'Faith',
    image: article1
  },
];

export default function FeaturedArticles() {
  return (
    <section className="px-4 py-8 bg-white">
      {/* Header section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Featured Articles</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper pellentesque ut. Nam sed non nullam nisl non pulvinar.
        </p>
      </div>

      {/* Grid of articles */}
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
              {/* Meta information */}
              <div className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-blue-600">{article.category}</span> · {article.time}
              </div>
              {/* Article title */}
              <h3 className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2">
                {article.title}
              </h3>
              {/* Read button */}
              <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-600">
                Read
              </button>
            </div>
          </div>
        ))}
      </div>
        {/* See More Button */}
      <div className="mt-10 text-center">
        <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">
          See More Articles
        </button>
      </div>
    </section>
  );
}
