import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiLike } from "react-icons/bi";
import { useParams } from "react-router-dom";

const Blog_details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const { blog_name, caregory, craeted_date, blog_photo, Likes } = blogs;

  useEffect(() => {
    fetch(`https://ass10-server-azharul122.vercel.app/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        // setLoading(false);
      });
  }, []);
  return (
    <div
      className={` bg-cover h-[50vh] md:h-[70vh] relative`}
      style={{ backgroundImage: `url(${blog_photo})` }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-end">
        <div className=" w-[96%] md:w-[5/6%] mx-auto pb-14">
          <div className="border-b-[1px] border-[#c19977] w-[150px] mb-5"></div>
          <p className="text-white text-xl md:text-3xl font-bold mb-5">
            {blog_name}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="postdate font-bold">{craeted_date}</p>
              <p className="font-bold">{caregory}</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <BiLike className="text-white text-xl font-bold" />
              <p>{Likes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_details;
