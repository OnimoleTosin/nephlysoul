"use client";

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

const Page = () => {
  const [postText, setPostText] = useState("");
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(12);
  const [commentCount, setCommentCount] = useState(12);
  const [showMoreTags, setShowMoreTags] = useState(false);
  const [expandedPost, setExpandedPost] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleComment = () => {
    setCommentCount((prev) => prev + 1);
    alert("Comment clicked");
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const PostCard = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-3 mb-2">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-[#333333]">John Doe • Jun 7</p>
          <p className="text-xs text-gray-500">In Growing Stronger</p>
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-3">
        {expandedPost
          ? `Lorem ipsum dolor sit amet consectetur. Turpis mattis nulla aliquam aliquet a enim dui molestie. Urna ullamcorper ipsum ornare a vehicula vel. Rhoncus pellen ...more.`
          : `Lorem ipsum dolor sit amet consectetur. Turpis mattis nulla aliquam...`}
        <button
          className="text-blue-600 text-sm ml-1"
          onClick={() => setExpandedPost(!expandedPost)}
        >
          {expandedPost ? "less" : "more"}
        </button>
      </p>

      <img
        src={Group4.src}
        alt="Post content"
        className="rounded-md object-cover h-[382px] w-full"
      />

      <div className="text-sm text-gray-500 mb-2">
        <span>{likeCount} Likes • </span>
        <span>{commentCount} Comments • </span>
        <span>12 Shares</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-around text-sm text-gray-700">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 ${
            liked ? "text-red-600" : "hover:text-red-600"
          }`}
        >
          {liked ? <FaHeart /> : <FaRegHeart />} Like
        </button>

        <button
          onClick={handleComment}
          className="flex items-center gap-1 hover:text-blue-600"
        >
          <FaRegComment /> Comment
        </button>

        <button className="flex items-center gap-1 hover:text-blue-600">
          <FaShare /> Share
        </button>

        <button
          onClick={handleSave}
          className={`flex items-center gap-1 ${
            saved ? "text-blue-600" : "hover:text-blue-600"
          }`}
        >
          {saved ? <FaBookmark /> : <FaRegBookmark />} Save
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="bg-[#FAFAFA] px-10 py-4">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 font-medium relative pb-1 hover:text-blue-700 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-blue-700">
              Community
            </button>
            <button className="text-gray-600 hover:text-blue-700">
              Articles
            </button>
          </div>
          <div className="text-xs text-gray-500">
            Forum / <span className="text-blue-600">Community</span>
          </div>
        </div>

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
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-400 cursor-not-allowed"
                }`}
                disabled={!postText}
              >
                Post
              </button>
            </div>
          </div>

          {[...Array(5)].map((_, i) => (
            <PostCard key={i} />
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
            <div className="p-4 space-y-4 max-h-[300px] overflow-y-auto">
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
                <div key={index} className="flex items-center gap-3">
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
                Find friend
                <span className="text-lg">
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Page;

// "use client";

// import React, { useState, useEffect } from "react";
// import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
// import { IoIosArrowForward } from "react-icons/io";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import { CiSaveDown2 } from "react-icons/ci";
// import laughter from "@/assets/twolady.png";
// import wife1 from "@/assets/wife1.png";
// import wife2 from "@/assets/wife2.png";
// import wife3 from "@/assets/wife3.png";
// import qoutebg from "@/assets/quotebg.png";

// const Comment = ({ nested = false }) => {
//   const [liked, setLiked] = useState(false);
//   const [disliked, setDisliked] = useState(false);

//   const handleLike = () => {
//     setLiked((prev) => !prev);
//     if (!liked && disliked) setDisliked(false);
//   };

//   const handleDislike = () => {
//     setDisliked((prev) => !prev);
//     if (!disliked && liked) setLiked(false);
//   };

//   return (
//     <div className={`flex ${nested ? "ml-10 mt-3" : "mt-5"} gap-3`}>
//       <img src="https://i.pravatar.cc/40" alt="avatar" className="w-10 h-10 rounded-full" />
//       <div className="mb-[53px]">
//         <h3 className="font-semibold mb-[5px]">John Doe</h3>
//         <p className="text-sm text-gray-700 mb-[24px]">
//           Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semp pellentesque ut. Nam sed non nullam nisl non pulvinar.
//         </p>
//         <div className="flex items-center gap-4 text-xs text-gray-500">
//           <button onClick={handleLike} className={`flex items-center gap-1 ${liked ? "text-blue-600" : ""}`}>
//             <LuThumbsUp size={14} /> {liked ? 21 : 20}
//           </button>
//           <button onClick={handleDislike} className={`flex items-center gap-1 ${disliked ? "text-blue-600" : ""}`}>
//             <LuThumbsDown size={16} /> {disliked ? 3 : 2}
//           </button>
//           <button className="flex items-center gap-1 hover:text-blue-600">Reply (3)</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ArticlePage = () => {
//   const topPosts = new Array(5).fill({
//     date: "Jun 25",
//     text: "Lorem ipsum dolor sit amet consectetur. Sed discetesque...",
//   });

//   const quotes = [
//     "One peaceful breath can be more powerful than a thousand noisy worries.",
//     "Even on cloudy days, the sun is still shining.",
//     "Strength grows in the moments when you think you can't go on but you keep going anyway.",
//     "Every day may not be good, but there is something good in every day.",
//   ];

//   const [quoteIndex, setQuoteIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setQuoteIndex((prev) => (prev + 1) % quotes.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       <Navbar/>

//       <header className="flex justify-between items-center px-4 sm:px-6 py-3 border-b text-sm flex-wrap gap-2">
//         <div className="flex items-center gap-6">
//           <span className="text-gray-700 cursor-pointer">Community</span>
//           <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">Articles</span>
//         </div>
//         <div className="text-xs text-gray-500">
//           <a href="#" className="hover:underline">Forum / Articles</a>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 py-6">

//         <div className="w-full md:w-2/3">
//           <span className="inline-block border border-gray-300 text-gray-600 text-sm px-3 py-1 rounded-full mb-3">Faith</span>

//           <h1 className="text-2xl md:text-3xl font-semibold leading-snug mb-2">
//             Lorem ipsum dolor sit amet ipsum dolor sit <br /> amet
//           </h1>

//           <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-[40px]">
//             <span className="font-medium text-blue-600">Admin</span>
//             <span>•</span>
//             <span>June 7</span>
//             <span>•</span>
//             <span>12 Comments</span>
//             <span>•</span>
//             <span>12 Views</span>
//           </div>

//           <img src={laughter.src} alt="image" className="rounded-md w-full h-auto mb-5" />

//           <div className="text-[15px] leading-relaxed space-y-4">
//             <p>
//               Lorem ipsum dolor sit amet consectetur. Turpis mattis nulla aliquam aliquet a enim dui molestie...
//             </p>
//           </div>

//           <div className="flex items-center gap-6 text-sm text-gray-500 my-6 flex-wrap">
//             <div className="flex items-center gap-2">
//               <LuThumbsUp size={16} /> 20
//             </div>
//             <div className="flex items-center gap-2">
//               <LuThumbsDown size={16} /> 2
//             </div>
//             <div className="flex items-center gap-2 ml-auto">
//               <CiSaveDown2 size={16} /> save
//             </div>
//           </div>

//           <div className="text-[#767676] my-[40px]"><hr /></div>

//           <div className="mb-8">
//             <h3 className="font-medium text-gray-700 mb-2">Leave a comment</h3>
//             <textarea
//               placeholder="Write comment..."
//               className="w-full border border-[#A1A1A1] rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none resize-none"
//               rows={4}
//             />
//           </div>

//           <Comment />
//           <Comment nested />
//           <Comment />
//           <Comment />
//         </div>

//         <aside className="w-full md:w-1/3 space-y-8">
//           <div>
//             <input type="text" placeholder="Search" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none" />
//           </div>

//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <h3 className="bg-[#3566A0] text-white px-4 py-2 font-semibold">Categories</h3>
//             <ul className="text-sm divide-y divide-gray-200 px-4 py-2">
//               {["Culture", "Creativity", "Food", "Travel", "Humor", "Music", "Faith"].map((category) => (
//                 <li key={category} className="py-2 hover:text-blue-600 cursor-pointer">{category}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <h3 className="bg-[#3566A0] text-white px-4 py-2 font-semibold">Top Posts</h3>
//             <div className="p-4 space-y-4">
//               {topPosts.map((post, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <img src={wife1.src} alt="post" className="w-12 h-12 object-cover rounded" />
//                   <div>
//                     <p className="text-xs text-gray-500 mb-1">{post.date}</p>
//                     <p className="text-sm font-medium text-gray-800 leading-snug">{post.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <h3 className="bg-[#3566A0] text-white px-4 py-2 font-semibold">Tags</h3>
//             <div className="flex flex-wrap gap-2 text-sm px-4 py-3">
//               {["Culture", "Spirituality", "Faith", "Digital", "Politics", "Social Well-being"].map((tag) => (
//                 <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100">{tag}</span>
//               ))}
//             </div>
//           </div>

//           <div className="bg-[red] rounded-lg overflow-hidden shadow max-w-full">
//             <div className="bg-cover bg-center p-6 text-white text-center w-full h-[380px]" style={{ backgroundImage: `url(${qoutebg.src})` }}>
//               <p className="text-[24px] font-medium mb-[49px]">Quote Of The Day</p>
//               <p className="text-lg font-semibold leading-snug text-[32px] text-center">{quotes[quoteIndex]}</p>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-[#5E18C3] to-[#38087C] text-white p-6 rounded-xl text-center shadow-md w-full h-[320px] flex flex-col items-center justify-center">
//             <h4 className="text-xl font-semibold mb-6 leading-relaxed">
//               Need a friend to <br /> talk to? Find one <br /> today!
//             </h4>
//             <button className="bg-[#4A90E2] text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition inline-flex items-center gap-2 cursor-pointer">
//               Find friend <span className="text-lg"><IoIosArrowForward /></span>
//             </button>
//           </div>
//         </aside>
//       </main>

//       <section className="bg-white mt-10 px-4 pb-16">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="mb-6 text-[32px] font-semibold text-[#645674]">More Articles</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
//             {[wife1, wife2, wife3].map((img, idx) => (
//               <div key={idx} className="rounded overflow-hidden">
//                 <img src={img.src} alt={`article-${idx + 1}`} className="w-full h-[300px] object-cover rounded" />
//                 <p className="text-[24px] text-[#333333] mt-2 px-2">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ArticlePage;
