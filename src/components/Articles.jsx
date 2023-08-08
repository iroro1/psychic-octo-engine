import React from "react";
import post1 from "../assets/postsImg/post1.png";
import post2 from "../assets/postsImg/post2.png";
import post3 from "../assets/postsImg/post3.png";
import PostCard from "./PostCard";

const Articles = () => {
  const posts = [
    {
      id: 1,
      url: "https://www.linkedin.com/pulse/how-become-self-taught-developer-cecureintelligence/?trackingId=cCkpyuBF0ywGhxtvxM1w9g%3D%3D",
      title: "How to Become a Self-taught Developer",
      img: post1,
      author: "Leo Ojigbo",
      datePublished: "October 17, 2022",
      desc: "With new technologies and the 10X growth of tech in every sphere of life, the demand for highly skilled and qualified individuals to write software is on a steady rise. The great thing about this era is the large pool of resources available to us to pick up awesome coding skills quickly.  This is aimed at non-developers looking at learning to code or newbie developers still struggling with the bunch of resources out there",
      publishedPlatform: {
        name: "CIL Digital Innovation Guide",
        url: "https://www.linkedin.com/newsletters/cil-digital-innovation-guide-6976468488890531840/",
      },
    },
    {
      id: 2,
      url: "https://www.linkedin.com/pulse/web-3-how-we-got-here-cecureintelligence/?trackingId=b2mFMhw0ijHwNwT%2BARyuOQ%3D%3D",
      title: "WEB 3: How We Got Here!",
      img: post2,
      author: "Leo Ojigbo",
      datePublished: "April 20, 2023",
      desc: "Web 3 is a term that is often associated with the latest and greatest advancements in the field of digital communication. It refers to the next evolution of the internet, where the web will become more advanced and connected than ever before.",
      publishedPlatform: {
        name: "CIL Digital Innovation Guide",
        url: "https://www.linkedin.com/newsletters/cil-digital-innovation-guide-6976468488890531840/",
      },
    },
    {
      id: 3,
      url: "https://www.linkedin.com/pulse/smart-contract-short-story-cecureintelligence/?trackingId=wl6raNqToBN5zM3n6RplbQ%3D%3D",
      title: "Smart contract: A short story",
      img: post3,
      author: "Leo Ojigbo",
      datePublished: "June 6, 2023",
      desc: "A smart contract is used in the blockchain as an automated way to transact.\n Let's explain this with an illustration. A man named Paul and his wife Amy live in Africa. Amy loves to buy expensive designer shoes and bags. Amy works as a Software Engineer.  Amy expects to get paid next weekend but saw a designer shoe for sale at 1000 dollars.",
      publishedPlatform: {
        name: "CIL Digital Innovation Guide",
        url: "https://www.linkedin.com/newsletters/cil-digital-innovation-guide-6976468488890531840/",
      },
    },
  ];
  return (
    <section className="h-full pb7">
      {posts.reverse().map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Articles;
