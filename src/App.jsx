import { useState } from "react";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
function App() {
  const [bookMark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookMark = (blog) => {
    console.log("clicked", blog);
    const newArr = [...bookMark, blog];
    setBookmark(newArr);
    // console.log(bookMark);
  };

  const handleReadTime = (blog) => {
    // console.log(blog);
    const newTime = readTime + blog.reading_time;
    setReadTime(newTime);
    console.log(readTime);
  };

  const handleDlt = (id) => {
    const newBookMarkList = bookMark.filter((mark) => mark.id !== id);
    setBookmark(newBookMarkList);
  };

  return (
    <>
      <Header />
      <div className="md:flex gap-5 container mx-auto">
        <Blog handleBookMark={handleBookMark} handleReadTime={handleReadTime} />
        <Bookmarks bookMark={bookMark} readTime={readTime} handleDlt={handleDlt}/>
      </div>
    </>
  );
}

export default App;
