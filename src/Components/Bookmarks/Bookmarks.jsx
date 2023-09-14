import PropTypes from "prop-types";
const Bookmarks = ({ bookMark, readTime, handleDlt }) => {
  return (
    <div className="md:w-1/3">
      <h2>Read time: {readTime}min</h2>
      {bookMark.map((mark, idx) => (
        <div key={idx}>
          <h2>{mark.title} </h2>
          <button
            onClick={() => handleDlt(mark.id)}
            className="border bg-slate-700 rounded-xl p-2 text-gray-400"
          >
            Delete{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookMark: PropTypes.array.isRequired,
  handleDlt: PropTypes.func,
  readTime: PropTypes.any,
};

export default Bookmarks;
