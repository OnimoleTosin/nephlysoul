"use client";

import React, { useState, useEffect } from "react";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { CiSaveDown } from "react-icons/ci";
import laughter from "@/assets/twolady.png";
import wife1 from "@/assets/wife1.png";
import wife2 from "@/assets/wife2.png";
import wife3 from "@/assets/wife3.png";
import qoutebg from "@/assets/quotebg.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ArticlePage = () => {
  const router = useRouter();

  const topPosts = new Array(5).fill({
    date: "Jun 25",
    text: "Lorem ipsum dolor sit amet consectetur. Sed discetesque...",
  });

  const quotes = [
    "One peaceful breath can be more powerful than a thousand noisy worries.",
    "Even on cloudy days, the sun is still shining.",
    "Strength grows in the moments when you think you can't go on but you keep going anyway.",
    "Every day may not be good, but there is something good in every day.",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [comments, setComments] = useState([
    {
      name: "Boluwatiwi Sodiq",
      avatar: "https://i.pravatar.cc/40",
      text: "This really touched my heart. Everyone deserves to feel seen, no matter their age.",
      likes: 20,
      dislikes: 2,
      liked: false,
      disliked: false,
      replies: 3,
      nested: false,
    },
    {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/41",
      text: "Aging can feel invisible sometimes… thank you for this gentle reminder that we all matter. Aging can feel invisible sometimes… thank you for this gentle reminder that we all matter..",
      likes: 20,
      dislikes: 2,
      liked: false,
      disliked: false,
      replies: 0,
      nested: true,
    },
    {
      name: "Mary Janet",
      avatar: "https://i.pravatar.cc/42",
      text: "My mom lights up when someone takes time to really see her. It means everything.",
      likes: 20,
      dislikes: 2,
      liked: false,
      disliked: false,
      replies: 3,
      nested: false,
    },
    {
      name: "Sam Adeniyi",
      avatar: "https://i.pravatar.cc/43",
      text: "I used to rush through visits with my granddad. This post makes me want to slow down and really be with him.",
      likes: 20,
      dislikes: 2,
      liked: false,
      disliked: false,
      replies: 3,
      nested: false,
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments([
      {
        name: "You",
        avatar: "https://i.pravatar.cc/44",
        text: newComment,
        likes: 0,
        dislikes: 0,
        liked: false,
        disliked: false,
        replies: 0,
        nested: false,
      },
      ...comments,
    ]);
    setNewComment("");
  };

  const handleLike = (idx) => {
    setComments((prev) =>
      prev.map((c, i) => {
        if (i !== idx) return c;

        if (c.liked) {
          return { ...c, liked: false, likes: c.likes - 1 };
        } else {
          return {
            ...c,
            liked: true,
            likes: c.likes + 1,
            disliked: false,
            dislikes:
              c.disliked && c.dislikes > 0 ? c.dislikes - 1 : c.dislikes,
          };
        }
      })
    );
  };

  const handleDislike = (idx) => {
    setComments((prev) =>
      prev.map((c, i) => {
        if (i !== idx) return c;

        if (c.disliked) {
          return { ...c, disliked: false, dislikes: c.dislikes - 1 };
        } else {
          return {
            ...c,
            disliked: true,
            dislikes: c.dislikes + 1,
            liked: false,
            likes: c.liked && c.likes > 0 ? c.likes - 1 : c.likes,
          };
        }
      })
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 ">
      <Navbar />
  <div className="bg-[#FAFAFA] px-20 py-4">


      <div className="flex justify-between items-center px-4 sm:px-6 pt-6 pb-2">

        <div className="text-xs text-gray-500 ml-auto">
          <a href="#">
            Forum/ <span className="text-blue-700">Articles</span>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm px-4 sm:px-6 mb-2">
        <Link href="/Forum" className="text-gray-700 cursor-pointer">
          Community
        </Link>
        <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">
          Articles
        </span>
      </div>

      <main className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 py-6">
        <div className="w-full md:w-2/3">
          <span className="inline-block border border-gray-300 text-gray-600 text-sm px-3 py-1 rounded-full mb-3">
            Faith
          </span>

          <h1 className="text-2xl md:text-3xl font-semibold leading-snug mb-2">
            The Gentle Power of Being Seen: Finding <br /> Comfort and
            Connection as We Grow Older
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-[40px]">
            <span className="font-medium text-blue-600">Admin</span>
            <span>•</span>
            <span>June 7</span>
            <span>•</span>
            <span>12 Comments</span>
            <span>•</span>
            <span>12 Views</span>
          </div>

          <img
            src={laughter.src}
            alt="image"
            className="rounded-md w-full h-auto mb-5"
          />

          <div className="text-[20px] font-[500px] leading-relaxed space-y-4 text-[#000000]">
            <p>
              As we grow older, something subtle begins to shift. The calls slow
              down. The visits <br /> become occasional. The house becomes
              quieter. And then, one day, you start wondering: <br /> Do I still
              matter? <br />
              <br />
              This isn’t just a passing thought. It’s a deep ache, not for
              attention, but for connection. <br /> For presence. For being
              seen. <br /> In our fast-moving world, it’s easy to feel
              invisible. Especially for those in their 50s, 60s, <br /> 70s, and
              beyond, many of whom have raised children, served communities,
              loved deeply, <br /> and now sit in spaces that don’t reflect how
              much they’ve poured into the world. <br /> But here’s the truth:
              You still matter. You always will. <br /> Being seen isn’t about
              having thousands of followers or a buzzing phone. It’s the <br />
              neighbor who pauses to wave. It’s the friend who remembers your
              favorite hymn. It’s the <br /> prayer partner who checks in just
              to say, “I was thinking of you today.” <br /> <br /> At
              NephlySoul, we believe emotional and spiritual companionship
              doesn’t end with age. <br /> It deepens. We believe in the power
              of stories, shared silence, gentle laughter, and <br /> collective
              faith. <br /> When someone listens, truly listens to your story,
              your prayer, your memory… healing <br /> begins. You’re no longer
              a background character in a digital world. You become the <br />{" "}
              vibrant, tender soul that you’ve always been. <br /> <br /> So
              whether you're reading this with a warm cup of tea or resting
              quietly in your living <br />
              room, let this truth settle in your heart: <br /> You are still
              seen. You are still loved. You are still important. <br /> Don’t
              shrink yourself. Don’t silence your story. There’s still space for
              your voice, your <br />
              laughter, your wisdom. <br /> And here, within this gentle circle,
              you’ll never walk alone.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 my-6 flex-wrap">
            <div className="flex items-center gap-2">
              <LuThumbsUp size={16} /> 20
            </div>
            <div className="flex items-center gap-2">
              <LuThumbsDown size={16} /> 2
            </div>
            <div className="flex items-center gap-2 ml-auto"></div>
          </div>

          <div className="text-[#767676] my-[40px]">
            <hr />
          </div>

          <div className="mb-8">
            <h3 className="font-medium text-gray-700 mb-2">Leave a comment</h3>
            <textarea
              placeholder="Write comment..."
              className="w-full border border-[#A1A1A1] rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none resize-none"
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="mt-2 bg-[#3566A0] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              onClick={handleAddComment}
            >
              Post Comment
            </button>
          </div>

          <div className="space-y-8">
            {comments.map((c, idx) => (
              <div key={idx} className={c.nested ? "ml-12" : ""}>
                <div className="flex items-center gap-3 mb-1">
                  <img
                    src={c.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <h3 className="font-semibold">{c.name}</h3>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 mb-2">{c.text}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <button
                        className={`flex items-center gap-1 ${
                          c.liked ? "text-blue-600" : "hover:text-blue-600"
                        }`}
                        onClick={() => handleLike(idx)}
                      >
                        <LuThumbsUp size={14} /> {c.likes}
                      </button>
                      <button
                        className={`flex items-center gap-1 ${
                          c.disliked ? "text-blue-600" : "hover:text-blue-600"
                        }`}
                        onClick={() => handleDislike(idx)}
                      >
                        <LuThumbsDown size={16} /> {c.dislikes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-600">
                        Reply
                        {c.replies > 0 ? ` (${c.replies})` : ""}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="w-full md:w-1/3 space-y-8">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <h3 className="bg-[#3566A0] text-white px-4 py-2 font-semibold">
              Categories
            </h3>
            <ul className="text-sm divide-y divide-gray-200 px-4 py-2">
              {[
                "Culture",
                "Creativity",
                "Food",
                "Travel",
                "Humor",
                "Music",
                "Faith",
              ].map((category) => (
                <li
                  key={category}
                  className="py-2 hover:text-blue-600 cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <h3 className="bg-[#3566A0] text-white px-4 py-2 font-semibold">
              Top Posts
            </h3>
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-3 hover:bg-blue-100 rounded transition">
                <img
                  src={wife1.src}
                  alt="post 1"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Jun 25</p>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    Helping seniors reconnect <br /> through simple
                    conversations th...
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:bg-blue-100 rounded transition">
                <img
                  src={wife2.src}
                  alt="post 2"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Jun 20</p>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    Reviving bonds through <br /> storytelling, laughter, and
                    share...
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:bg-blue-100 rounded transition">
                <img
                  src={wife3.src}
                  alt="post 3"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Jun 15</p>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    Bringing older adults together <br /> through talk,
                    laughter, and mea...
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:bg-blue-100 rounded transition">
                <img
                  src={wife1.src}
                  alt="post 1"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Jun 25</p>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    Conversations reduce loneliness, <br /> let’s help our
                    elders feel seen, h...
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:bg-blue-100 rounded transition">
                <img
                  src={wife2.src}
                  alt="post 2"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Jun 20</p>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    Creating warm spaces for aged <br /> voices to be heard and
                    relations...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <h3 className="bg-[#3566A0] text-white px-4 py-2 font-semibold">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2 text-sm px-4 py-3">
              {[
                "Culture",
                "Spirituality",
                "Faith",
                "Digital",
                "Politics",
                "Social Well-being",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[red] rounded-lg overflow-hidden shadow max-w-full">
            <div
              className="bg-cover bg-center p-6 text-white text-center w-full h-[380px]"
              style={{ backgroundImage: `url(${qoutebg.src})` }}
            >
              <p className="text-[24px] font-medium mb-[49px]">
                Quote Of The Day
              </p>
              <p className="text-lg font-semibold leading-snug text-[32px] text-center">
                {quotes[quoteIndex]}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#5E18C3] to-[#38087C] text-white p-6 rounded-xl text-center shadow-md w-full h-[320px] flex flex-col items-center justify-center">
            <h4 className="text-xl font-semibold mb-6 leading-relaxed">
              Looking for someone to talk to? Find one today!
            </h4>
            <Link
              href="/FindFriends"
              className="bg-[#4A90E2] text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition inline-flex items-center gap-2 cursor-pointer"
            >
              Find Friends
            </Link>
          </div>
        </aside>
      </main>

      <section className="bg-white mt-10 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-6 text-[32px] font-semibold text-[#645674]">
            More Articles
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
            {[
              {
                img: wife1.src,
                text: "How widows and widowers are learning to breathe again through...",
              },
              {
                img: wife2.src,
                text: "What happens when your one source of connection disappears?",
              },
              {
                img: wife3.src,
                text: "One elder’s small daily ritual that turned loneliness into light.",
              },
            ].map((article, idx) => (
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
</div>
      <Footer />
    </div>
  );
};

export default ArticlePage;
