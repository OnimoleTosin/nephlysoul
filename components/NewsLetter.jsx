import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function NewsLetter() {
  return (
    < section className = "bg-cover bg-center text-white py-20 px-4" style = {{ backgroundImage: `url('/assets/friendsbg.png')` }
}>
  <div className="max-w-xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">Find A Friend Near You.</h1>
    <p className="mb-6 text-lg">Fill the form below to connect with a friend just near you and talk.</p>
    <form className="flex flex-col md:flex-row gap-[19px] w-full max-w-[597px] mx-auto">
      <input
        type="email"
        required
        placeholder="Email Address"
        className="bg-white text-black rounded-[12px] px-4 py-3 w-full md:w-[400px]"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-[#3566A0] hover:bg-blue-600 text-white text-base px-6 py-3 rounded-lg transition"
      >
        Subscribe <FaArrowRight className="text-lg" />
      </button>
    </form>

  </div>
    </section >
  );
}
