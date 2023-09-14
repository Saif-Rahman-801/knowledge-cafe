import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Sblogs = ({ blog, handleBookMark, handleReadTime }) => {
  //   console.log(blog);
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="py-5">
      <img src={cover} alt="" className="w-full" />
      <div className="flex justify-between my-5">
        <div className="flex items-center gap-4">
          <img src={author_img} alt="" className="h-14" />
          <div>
            <h2>{author} </h2>
            <p>{posted_date} </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <p>{reading_time} min read </p>
          <button onClick={() => handleBookMark(blog)}>
            <FaBookmark />
          </button>
        </div>
      </div>
      <div className="my-5">
        <h1 className="font-bold text-3xl">{title} </h1>
        <button className="text-blue-400" onClick={() => handleReadTime(blog)}>
          Mark as Read
        </button>
      </div>
      <div className="my-5">
        <p>
          {hashtags.map((hash, idx) => (
            <span key={idx}>
              <a href="">#{hash} </a>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

Sblogs.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
}

export default Sblogs;
