import PropTypes from "prop-types";
const Bookmarks = ({ bookMark }) => {

    

  return (
    <div className="md:w-1/3">
      <h2>Bookmarks: {bookMark.length}</h2>
      {bookMark.map((mark) => (
        <div key={mark.id}>
          <h2>{mark.title} </h2>
          <button className="border bg-slate-700 rounded-xl p-2 text-gray-400">
            Delete{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookMark: PropTypes.any,
};

export default Bookmarks;
