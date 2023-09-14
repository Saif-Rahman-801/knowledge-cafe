import PropTypes from "prop-types";
const Sblogs = ({ blog }) => {
  console.log(blog);
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
      <img src={cover} alt="" />
      <div className="flex justify-between my-5">
        <div className="flex items-center gap-4">
          <img src={author_img} alt="" className="h-14" />
          <div>
            <h2>{author} </h2>
            <p>{posted_date} </p>
          </div>
        </div>
        <div>
          <p>{reading_time} min read </p>
        </div>
      </div>
      <div className="my-5">
        <h1 className="font-bold text-3xl">{title} </h1>
      </div>
      <div className="my-5">
        <p>#{hashtags} </p>
      </div>
    </div>
  );
};

Sblogs.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Sblogs;
