import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h2>Hello</h2>
    </div>
  );
};

export default Blog;
