"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import qoutebg from "@/assets/quotebg.png";
import React, { useState, useRef, useEffect } from "react";
import {
  FaPhotoVideo,
  FaSmile,
  FaVideo,
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaShare,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import Group4 from "@/assets/Group4.png";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "@/components/Footer";

// --- Add initial posts array ---
const initialPosts = Array(5)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    user: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "Jun 7",
      group: "Growing Stronger",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur. Turpis mattis nulla aliquam...",
    image: Group4.src,
    liked: false,
    saved: false,
    likeCount: 12,
    commentCount: 12,
    expanded: false,
  }));

const Page = () => {
  const [postText, setPostText] = useState("");
  const [showMoreTags, setShowMoreTags] = useState(false);
  const fileInputRef = useRef(null);
  const pathname = usePathname();

  // --- Manage posts state ---
  const [posts, setPosts] = useState(initialPosts);

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

  const handlePost = () => {
    if (postText.trim() === "") return;
    alert("Post submitted: " + postText);
    setPostText("");
  };

 
  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1,
            }
          : post
      )
    );
  };

  const handleSave = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, saved: !post.saved } : post
      )
    );
  };

  const handleExpand = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, expanded: !post.expanded } : post
      )
    );
  };

  const handleComment = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, commentCount: post.commentCount + 1 } : post
      )
    );
    alert("Comment clicked");
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

 
  const PostCard = ({ post, onLike, onSave, onExpand, onComment }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-3 mb-2">
        <img
          src={post.user.avatar}
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-[#333333]">
            {post.user.name} • {post.user.date}
          </p>
          <p className="text-xs text-gray-500">In {post.user.group}</p>
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-3">
        {post.expanded
          ? `Lorem ipsum dolor sit amet consectetur. Turpis mattis nulla aliquam aliquet a enim dui molestie. Urna ullamcorper ipsum ornare a vehicula vel. Rhoncus pellen ...more.`
          : post.content}
        <button className="text-blue-600 text-sm ml-1" onClick={onExpand}>
          {post.expanded ? "less" : "more"}
        </button>
      </p>

      <img
        src={post.image}
        alt="Post content"
        className="rounded-md object-cover h-[382px] w-full"
      />

      <div className="text-sm text-gray-500 mb-2">
        <span>{post.likeCount} Likes • </span>
        <span>{post.commentCount} Comments • </span>
        <span>12 Shares</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-around text-sm text-gray-700">
        <button
          onClick={onLike}
          className={`flex items-center gap-1 ${
            post.liked ? "text-red-600" : "hover:text-red-600"
          }`}
        >
          {post.liked ? <FaHeart /> : <FaRegHeart />} Like
        </button>

        <button
          onClick={onComment}
          className="flex items-center gap-1 hover:text-blue-600"
        >
          <FaRegComment /> Comment
        </button>

        <button className="flex items-center gap-1 hover:text-blue-600">
          <FaShare /> Share
        </button>

        <button
          onClick={onSave}
          className={`flex items-center gap-1 ${
            post.saved ? "text-blue-600" : "hover:text-blue-600"
          }`}
        >
          {post.saved ? <FaBookmark /> : <FaRegBookmark />} Save
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="bg-[#FAFAFA] px-10 py-4">
        <header className="flex justify-between items-center px-4 sm:px-6 py-3 border-b text-sm flex-wrap gap-2">
          <div className="flex items-center gap-6">
            <Link
              href="/Forum"
              className="text-[#3566A0] border-b-2 border-blue-600 pb-1 cursor-pointer"
            >
              Community
            </Link>
            <Link href="/Forum/articles">
              <span
                className={`pb-1 font-medium ${
                  pathname === "/forum/articles"
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-600 hover:text-blue-700"
                }`}
              >
                Articles
              </span>
            </Link>
          </div>

          <div className="text-xs text-gray-500">
            <a href="#" className="hover:underline">
              <span className="text-blue-700">Forum </span>/ Articles
            </a>
          </div>
        </header>

        <div className="mt-4 flex gap-3 overflow-x-auto whitespace-nowrap">
          {[
            "Health",
            "Social Well-being",
            "Adult Education",
            "Culture",
            "Economy",
            "Spirituality",
            "Faith",
            "Digital",
            "Politics",
            "Health",
          ].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-[#3566A0] hover:text-white cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4 ">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/75.jpg"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's happening?"
                className="flex-1 border border-gray-300 rounded-md p-2 text-sm resize-none text-[#5C5C5C]"
                rows={2}
              ></textarea>
            </div>

            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-4 text-sm text-gray-600">
                <button
                  onClick={handlePhotoClick}
                  className="flex items-center gap-1 hover:text-purple-600"
                >
                  <FaPhotoVideo className="text-purple-600" /> Photo/Video
                </button>
                <input type="file" className="hidden" ref={fileInputRef} />
                <button className="flex items-center gap-1 hover:text-yellow-500">
                  <FaSmile className="text-yellow-500" /> Feeling
                </button>
                <button className="flex items-center gap-1 hover:text-red-500">
                  <FaVideo className="text-red-500" /> Go live
                </button>
              </div>
              <button
                onClick={handlePost}
                className={`px-4 py-1 rounded text-sm ${
                  postText
                    ? "bg-[#3566A0] text-white"
                    : "bg-blue-100 text-blue-400 cursor-not-allowed hover:bg-blue-600"
                }`}
                disabled={!postText}
              >
                Post
              </button>
            </div>
          </div>

         
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={() => handleLike(post.id)}
              onSave={() => handleSave(post.id)}
              onExpand={() => handleExpand(post.id)}
              onComment={() => handleComment(post.id)}
            />
          ))}
        </div>

        <aside className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded px-3 py-2 text-sm text-[#5C5C5C]"
            />
          </div>

          <div className="bg-white rounded shadow">
            <div className="bg-[#3566A0] text-white px-4 py-2 rounded-t-md font-semibold">
              Popular Tags
            </div>
            <div className="p-4">
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="bg-gray-100 rounded-md p-2 hover:bg-blue-100 transition">
                  <div className="flex justify-between">
                    <span>#Staying happy</span>
                    <span className="text-gray-400 text-xs">1,291 posts</span>
                  </div>
                </li>
                <li className="bg-gray-100 rounded-md p-2 hover:bg-blue-100 transition">
                  <div className="flex justify-between">
                    <span>#Joy</span>
                    <span className="text-gray-400 text-xs">1,221 posts</span>
                  </div>
                </li>
                <li className="bg-gray-100 rounded-md p-2 hover:bg-blue-100 transition">
                  <div className="flex justify-between">
                    <span>#Happy Home</span>
                    <span className="text-gray-400 text-xs">321 posts</span>
                  </div>
                </li>
                <li className="bg-gray-100 rounded-md p-2 hover:bg-blue-100 transition">
                  <div className="flex justify-between">
                    <span>#Grateful Heart</span>
                    <span className="text-gray-400 text-xs">402 posts</span>
                  </div>
                </li>
                {showMoreTags && (
                  <>
                    <li className="bg-gray-100 rounded-md p-2 hover:bg-blue-100 transition">
                      <div className="flex justify-between">
                        <span>#Faithful Friends</span>
                      </div>
                    </li>
                    <li className="bg-gray-100 rounded-md p-2 hover:bg-blue-100 transition">
                      <div className="flex justify-between">
                        <span>#Wise Counsel</span>
                      </div>
                    </li>
                  </>
                )}
              </ul>
              <button
                onClick={() => setShowMoreTags(!showMoreTags)}
                className="text-blue-600 text-sm mt-2"
              >
                Show {showMoreTags ? "less" : "more"}
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow overflow-hidden">
            <div className="bg-[#3566A0] text-white px-4 py-2 font-semibold">
              My Groups
            </div>
            <div className="p-4 space-y-4 max-h-[300px] overflow-y-auto ">
              {[
                {
                  name: "Grief to Grace",
                  members: "12k",
                  img: "https://i.pravatar.cc/40?img=8",
                },
                {
                  name: "HeartTalk Community",
                  members: "21k",
                  img: "https://i.pravatar.cc/40?img=12",
                },
                {
                  name: "Quiet Hearts Club",
                  members: "11k",
                  img: "https://i.pravatar.cc/40?img=5",
                },
                {
                  name: "Graceful Evenings",
                  members: "5k",
                  img: "https://i.pravatar.cc/40?img=15",
                },
                {
                  name: "Stories & Laughter Lounge",
                  members: "3.2k",
                  img: "https://i.pravatar.cc/40?img=18",
                },
                {
                  name: "Soul Strength Sisters",
                  members: "1.1k",
                  img: "https://i.pravatar.cc/40?img=22",
                },
                {
                  name: "Hope and Healing",
                  members: "5.2k",
                  img: "https://i.pravatar.cc/40?img=27",
                },
              ].map((group, index) => (
                <div key={index} className="flex items-center gap-3 hover:bg-blue-100 transition">
                  <img
                    src={group.img}
                    alt={group.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {group.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {group.members} members
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3 hover:bg-blue-100 transition mt-4 pt-4">
                {/* <img
                  src="https://i.pravatar.cc/40?img=8"
                  alt="Grief to Grace"
                  className="w-10 h-10 rounded-full object-cover"
                /> */}
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Grief to Grace
                  </p>
                  <p className="text-xs text-gray-500">12k members</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[red] rounded-lg overflow-hidden shadow">
              <div
                className="bg-cover bg-center p-6 text-white text-center w-full h-[380px]"
                style={{
                  backgroundImage: `url(${qoutebg.src})`,
                }}
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
                Need a friend to
                <br /> talk to? Find one
                <br /> today!{" "}
              </h4>
              <button className="bg-[#4A90E2] text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition inline-flex items-center gap-2 cursor-pointer">
                <Link
                href="/FindFriends"
              >
                Find Friends
              </Link>
                <span className="text-lg">
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default Page;
