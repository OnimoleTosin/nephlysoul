import Image from 'next/image';
import { books } from "@/Data/Dummydata";


export default function Books() {
    return (
        <section className="px-32 py-4 bg-[#FAFAFA] ">
            <div className="py-10 px-4 bg-[#FAFAFA]">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-[#645674]">Featured Books</h2>
                    <p className="text-[#333333] md:text-lg font-semibold font-lg max-w-2xl mx-auto mb-10">
                        Explore handpicked devotionals, soulful reads, and comforting books chosen to uplift, guide, and gently walk with you.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] radius-[8px]">
                    {books.map((book, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow-xl hover:shadow-md transition">
                            <div className="relative w-full h-60 mb-4">
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded"
                                />
                            </div>

                            <div className="text-sm text-gray-500 flex items-center gap-2 mb-5">
                                <span className="font-medium shadow-sm text-black border-1 border-black rounded-[12px] px-2 py-0.5">{book.tag}</span>
                                <span className="text-xs">{book.badge}</span>
                            </div>

                            <h3 className="text-black font-bold text-lg mb-2">{book.title}</h3>
                            <p className="text-sm text-gray-600 mb-5">{book.author}</p>

                            <div className="flex flex-col justify-between align-center md:flex-row gap-4">
                                <div className="bg-white flex flex-col py-2 rounded-md text-black gap-2">
                                    <div className="flex  items-center gap-1 text-yellow-500">
                                        {'⭐'.repeat(Math.floor(book.rating))}
                                        <span className="text-black text-[11px] ml-1">{book.rating}</span>
                                    </div>
                                    <span className="text-black text-[11px] ">({book.views})</span>

                                </div>
                                <button className="bg-[#3566A0] mt-5 text-center px-4 py-2 text-sm rounded gap-2 text-white h-8 ">
                                    Read &rarr;
                                </button>

                            </div>
                        </div>

                    ))}
                </div>
                <div className="mt-10 text-center">
                    <button className="bg-[#3566A0] text-white px-6 py-2 rounded mb-15">
                        See More Books &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
}