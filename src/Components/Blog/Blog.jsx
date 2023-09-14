import { useState } from "react";
import { useEffect } from "react";
import Sblogs from "../Sblogs/Sblogs";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h2>Hello blogs: {blogs.length}</h2>
      {
        blogs.map((blog) => <Sblogs key={blog.id} blog={blog}/>)
      }
    </div>
  );
};

export default Blog;
