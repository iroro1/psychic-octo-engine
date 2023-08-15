// import { Share } from "@mui/icons-material";
import React from "react";

export const addEllipses = (txt, maxLength, numOfDots = 3) => {
  let dots = "";
  for (let i = 0; i < numOfDots; i++) {
    dots += ".";
  }
  return txt?.length < maxLength ? txt : txt?.slice(0, maxLength) + dots;
};
const PostCard = ({ post }) => {
  return (
    <div className="h-[100%] border botder-[#eee] w-full mt-9 rounded-lg shadow-lg hover:shadow-xl overflow-hidden md:flex relative">
      <img
        className="w-full md:min-w-[300px] md:max-w-[300px]"
        src={post?.img}
        alt={post.title}
      />
      <div className="p-2 pl-4 relative w-full">
        {/* <Share className="absolute cursor-pointer right-4 top-2 h-3 text-sm z-[999]" /> */}
        <h5 className="text-[18px] font-[800]">{post?.title}</h5>
        <div className="flex gap-8 mt-3 mb-1">
          <span className="text-sm font-medium">{post?.author}</span>
          <span className="text-sm  text-green-700">{post?.datePublished}</span>
        </div>
        <a
          className="text-[12px] font-thin"
          href={post?.publishedPlatform?.url}
          target="_blank"
          rel="noreferrer"
          title={post.publishedPlatform.name}
        >
          {post?.publishedPlatform?.name}
        </a>
        <a
          className="text-[12px] bg-green-700 text-white p-1 rounded-full ml-5"
          href={post?.url}
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
        <p title={post?.desc} className="mt-6 text-[13px] max-w-[600px]">
          {addEllipses(post?.desc, 305, 3)}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
