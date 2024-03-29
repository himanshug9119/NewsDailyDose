import React from "react";
import { Link } from "react-router-dom";

function NewsItem(props) {
  const cardStyle = {
    width: "18rem",
  };

  const defaultImage = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-03/240329-francis-scott-key-bridge-al-0855-d9319e.jpg";

  // Check if all required properties are available
  if (!props.title || !props.description || !props.url || !props.urlToImage) {
    return null; 
  }
  return (
    <div className="card" style={cardStyle}>
      <img
        src={props.urlToImage ? props.urlToImage : defaultImage}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title.slice(0, 40)}...</h5>
        <p className="card-text">{props.description.slice(0, 100)}...</p>
        <Link
          to={props.url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default NewsItem;
