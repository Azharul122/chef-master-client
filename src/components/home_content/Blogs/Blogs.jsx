import React, { useEffect } from "react";
import divider from "../../../assets/Images/divider.png";
import divider2 from "../../../assets/Images/divider2.png";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import "./Blogs.css";
import { Link } from "react-router-dom";
import "./../Recipe.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [hovered, setHovered] = useState(null);
  const sliceBlogs = blogs.slice(0, 3);

  const handleHover = (index) => {
    setHovered(index);
  };
  const handleLeave = () => {
    setHovered(null);
  };

  useEffect(() => {
    fetch(`https://ass10-server-azharul122.vercel.app/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        // setLoading(false);
      });
  }, []);

  return (
    <div className="w-full py-10">
      <div className="w-[96%] md:w-[90%] mx-auto">
        {/* title */}
        <div className="title text-center py-3">
          <p className="text-xl text-[#c38e60]">Our Blog</p>
          <p className="text-3xl font-bold my-2">Be First Who Read News</p>
          <img src={divider} className="mx-auto w-[250px] py-3" alt="" />
        </div>

        {/* Blogs */}
        <section className="w-full pt-3 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {sliceBlogs &&
              sliceBlogs.map((blog, index) => (
                <Link
                  to={`blogs/${blog.id}`}
                  className=" bg-black cursor-pointer shadow-xl"
                  key={blog.blog_name}
                  onMouseLeave={handleLeave}
                  onMouseEnter={() => handleHover(index)}
                >
                  <img
                    src={blog.blog_thumbnail}
                    className={`w-full transition-transform transform-gpu ${
                      hovered == index ? "scale-90" : ""
                    }`}
                    alt=""
                  />
                  <div className="w-[90%] mx-auto mt-4">
                    <div className="flex gap-2 items-center mb-3">
                      <p className="text-[#c38e60] postdate">
                        {blog.craeted_date}
                      </p>
                      <div className="flex gap-1 items-center">
                        <BiLike className="text-[#c38e60]" />
                        <p>{blog.Likes}</p>
                      </div>
                    </div>
                    <p>{blog.blog_name}</p>
                  </div>
                  <div
                    className={` my-5 border-b-[1px] text-[#c38e60] border-[#c38e60] ${
                      hovered == index ? "w-full" : "w-1/3"
                    }`}
                  ></div>
                </Link>
              ))}
          </div>
          <div className="mt-12 p-1 bg-transparent border-[#c19977] border w-[146px] mb-1 md:mb-3 flex justify-center items-center mx-auto">
            <Link
              to={"all-blogs"}
              className="py-2 px-4 bg-[rgb(209,147,92)] text-white hover:bg-gray-500 border border-[#c19977] border-spacing-2"
            >
              Discover More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
