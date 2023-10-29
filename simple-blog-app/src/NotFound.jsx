import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link className="not-found-link" to="/">
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
