import { useEffect, useState } from "react";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
function App() {
  const [bookMark, setBookmark] = useState([]);

  const handleBookMark = (blog) => {
    console.log("clicked", blog);
    const newArr = [...bookMark, blog];
    setBookmark(newArr);
    // console.log(bookMark);
  };

  return (
    <>
      <Header />
      <div className="md:flex container mx-auto">
        <Blog handleBookMark={handleBookMark} />
        <Bookmarks bookMark={bookMark} />
      </div>
    </>
  );
}

export default App;
