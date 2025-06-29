// dummydata.jsx
import Books from "@/assets/Books.png";
import article1 from "@/assets/article1.png";
import article2 from "@/assets/article2.jpg";
import article3 from "@/assets/article3.jpg";
import faith from "@/assets/Groups/faith.png";
import devotion from "@/assets/Groups/devotion.jpg";
import happening from "@/assets/Groups/happening.jpg";
import pray from "@/assets/Groups/happening.jpg";
import talk from "@/assets/Groups/talk.jpg";
import connect from "@/assets/Groups/connect.jpg";
import testimony from "@/assets/testimony.png"

export const books = Array(6).fill({
  id: 1,
  title: 'The 21 Irrefutable Laws of Leadership Revised',
  author: 'John C. Maxwell',
  image: Books,
  rating: 4.5,
  tag: 'Faith',
  badge: 'Recently added',
  views: '20 people viewing now',
});

export const articles = [
  {
    id: 1,
    title: '5 Things To Do To Maintain A Healthy Lifestyle of Faith Everyday',
    time: '5 mins ago',
    category: 'Faith and Devotion',
    image: article1,
  },
  {
    id: 2,
    title: ' How widows and widowers are learning to breathe again through...',
    time: '5 mins ago',
    category: 'Healing',
    image: article2,
  },
  {
    id: 3,
    title: ' The surprising ways older adults are forming friendships that last.',
    time: '5 mins ago',
    category: 'Connection',
    image: article3,
  },
  {
    id: 4,
    title: 'What happens when your one source of connection disappears?',
    time: '5 mins ago',
    category: 'Social Well-Being',
    image: article2,
  },
  {
    id: 5,
    title: 'The hidden emotional weight of aging alone and how to ease it with simple...',
    time: '5 mins ago',
    category: 'Mental Health',
    image: article3,
  },
  {
    id: 6,
    title: 'One elder’s small daily ritual that turned loneliness into light.',
    time: '5 mins ago',
    category: 'Daily Living',
    image: article1,
  },
];

export const groups = [
  {
    name: 'The Lifestyle of Faith',
    members: '130k',
    image: faith,
  },
  {
    name: 'Daily Devotional',
    members: '130k',
    image: devotion,
  },
  {
    name: "what's happening?",
    members: '130k',
    image: happening,
  },
  {
    name: "Let's Pray",
    members: '130k',
    image: pray,
  },
  {
    name: "Let's talk life",
    members: '130k',
    image: talk,
  },
  {
    name: 'Soul connect',
    members: '130k',
    image: connect,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO',
    image: testimony,
    message:
      'Lorem ipsum dolor sit amet consectetur. Urna pharetra pharetra nam vehicula vestibulum vestibulum arcu ac. Quis molestie sed turpis et gravida bibendum sit. Purus rhoncus sit dui maecenas lobortis et pulvinar suspendisse.',
  },
  {
    id: 2,
    name: 'Grace O.',
    title: 'Community Lead',
    image: testimony,
    message:
      'This platform helped me connect with people I never thought I’d meet. The devotionals are inspiring and the interface is easy to use.',
  },
  {
    id: 3,
    name: 'Daniel K.',
    title: 'Youth Pastor',
    image: testimony,
    message:
      'Everything is streamlined and spirit-filled. Being able to connect with like-minded people daily is a blessing!',
  },
];