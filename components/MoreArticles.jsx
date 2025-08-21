import wife1 from "@/assets/wife1.png";
import wife2 from "@/assets/wife2.png";
import wife3 from "@/assets/wife3.png";

export default function MoreArticles() {
  // You can change these texts as you wish!
  const articles = [
    {
      img: wife1,
      text: "Helping seniors reconnect through simple conversations.",
    },
    {
      img: wife2,
      text: "Reviving bonds through storytelling, laughter, and sharing.",
    },
    {
      img: wife3,
      text: "Bringing older adults together through talk, laughter, and meals.",
    },
  ];

  return (
    <section className="bg-white mt-10 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-6 text-[32px] font-semibold text-[#645674]">
          More Articles
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {articles.map((article, idx) => (
            <div key={idx} className="rounded overflow-hidden">
              <img
                src={article.img}
                alt={`article-${idx + 1}`}
                className="w-full h-[300px] object-cover rounded"
              />
              <p className="text-[24px] text-[#333333] mt-2 px-2">
                {article.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}