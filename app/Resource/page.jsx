'use client';

import React from 'react';
import Image from 'next/image';
import { books } from '@/Data/Dummydata';
import Navbar from '@/components/Navbar';
import { FaSearch } from 'react-icons/fa';
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';

const BookLibrary = () => {
  return (
    <div className="flex flex-col font-sans bg-[#FAFAFA] min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row p-6 md:p-12 lg:p-20 gap-6">
        {/* LEFT COLUMN (Book Library + Books) */}
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold text-[#645674] mb-6 text-center md:text-left">
            Book Library
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white shadow rounded-lg p-4 flex flex-col justify-between h-full hover:shadow-lg transition duration-200"
              >
                <div className="relative w-full h-60 mb-4">
                  <Image
                    src={book.image}
                    alt={book.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex gap-2 text-xs text-gray-600 mb-2">
                      <span className="font-medium text-black border border-black rounded-full px-2 py-0.5">
                        {book.tag}
                      </span>
                      <span className="text-xs">{book.badge}</span>
                    </div>

                    <h3 className="text-lg font-bold text-black mb-1">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{book.author}</p>

                    <div className="text-yellow-500 text-sm mb-1">
                      {'★'.repeat(Math.floor(book.rating))}
                      {'☆'.repeat(5 - Math.floor(book.rating))}
                    </div>

                    <span className="text-black text-xs">({book.views})</span>
                  </div>

                  <button className="mt-4 bg-[#3566A0] text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition w-full text-center cursor-pointer">
                    Read &rarr;
                  </button>
                </div>
              </div>
            ))}

            <div className="col-span-full text-center mt-6">
              <button className="bg-[#3566A0] text-white px-6 py-2 text-sm sm:text-base rounded hover:bg-blue-700 transition cursor-pointer">
                See More Books &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR (Search + Filters + Recent Books) */}
        <div className="w-full md:w-1/3 rounded-lg p-4 h-fit">
          {/* Search */}
          <div className="w-full flex flex-row gap-5 px-3 py-2 border border-[#A1A1A1] mb-10 rounded text-gray-700 bg-white">
            <FaSearch />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none border-none focus:ring-0"
            />
          </div>

          {/* Categories */}
          <div className="mb-8 shadow rounded bg-white">
            <h4 className="font-semibold mb-3 bg-[#3566A0] text-white px-3 py-2 rounded-t">
              Category
            </h4>
            <div className="space-y-4 p-3">
              {[
                'Devotionals', 'Grief', 'Prayer', 'Memoirs',
                'Faith', 'Healing', 'Wisdom', 'Love', 'Forgiveness',
              ].map((category, idx) => (
                <label
                  key={idx}
                  className="block text-base text-black font-medium cursor-pointer hover:bg-[#FAFAFA]"
                >
                  <input type="radio" name="category" className="mr-2 accent-[#3566A0]" />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Authors */}
          <div className="mb-8 shadow rounded bg-white">
            <h4 className="font-semibold mb-3 bg-[#3566A0] text-white px-3 py-2 rounded-t">
              Author
            </h4>
            <div className="space-y-4 p-3">
              {[
                'Alexander Hope', 'Amit Etkin', 'Amy Tan',
                'George Martin', 'Clarence Edwin',
              ].map((author, idx) => (
                <label
                  key={idx}
                  className="block text-base text-black font-medium cursor-pointer hover:bg-[#FAFAFA]"
                >
                  <input type="radio" name="author" className="mr-2 accent-[#3566A0]" />
                  {author}
                </label>
              ))}
            </div>
          </div>

          {/* Ratings */}
          <div className="mb-8 shadow rounded bg-white">
            <h4 className="font-semibold mb-3 bg-[#3566A0] text-white px-3 py-2 rounded-t">
              Rating
            </h4>
            <div className="space-y-4 p-3">
              {[5, 4, 3, 2, 1].map((star) => (
                <label
                  key={star}
                  className="block text-base text-yellow-500 font-medium cursor-pointer hover:bg-[#FAFAFA]"
                >
                  <input type="radio" name="rating" className="mr-2 accent-[#3566A0]" />
                  {'★'.repeat(star)}{'☆'.repeat(5 - star)}
                </label>
              ))}
            </div>
          </div>

          {/* Format */}
          <div className="mb-8 shadow rounded bg-white">
            <h4 className="font-semibold mb-3 bg-[#3566A0] text-white px-3 py-2 rounded-t">
              Format
            </h4>
            <div className="space-y-4 p-3">
              {['Softcopy', 'Hardcopy'].map((format, idx) => (
                <label
                  key={idx}
                  className="block text-base text-black font-medium cursor-pointer hover:bg-[#FAFAFA]"
                >
                  <input type="radio" name="format" className="mr-2 accent-[#3566A0]" />
                  {format}
                </label>
              ))}
            </div>
          </div>

          {/* Recent Books */}
          <div className="mb-8 shadow rounded bg-white">
            <h4 className="font-semibold mb-3 bg-[#3566A0] text-white px-3 py-2 rounded-t">
              Recent Books
            </h4>
            <div className="space-y-1">
              {books.slice(0, 5).map((book) => (
                <div
                  key={book.id}
                  className="flex gap-2 items-start px-3 py-2 cursor-pointer hover:bg-[#FAFAFA]"
                >
                  <div className="relative w-10 h-12">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="text-md font-bold text-black leading-tight">
                      {book.title.length > 35 ? book.title.slice(0, 35) + '…' : book.title}
                    </p>
                    <p className="text-xs text-black">{book.author}</p>
                    <div className="text-yellow-500 text-sm">
                      {'★'.repeat(Math.floor(book.rating))}
                      {'☆'.repeat(5 - Math.floor(book.rating))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default BookLibrary;
