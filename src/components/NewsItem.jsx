import React from "react";
import { Link } from "react-router-dom";

function NewsItem(props) {
  const cardStyle = {
    width: "18rem",
  };

  const imageStyle = {
    width: "100%",
    height: "200px", // Set the desired height for the image
    objectFit: "cover", // This will ensure the image covers the given height and width without stretching
  };

  const defaultImage =
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-03/240329-francis-scott-key-bridge-al-0855-d9319e.jpg";

  // Check if all required properties are available
  if (!props.title || !props.description || !props.url || !props.urlToImage) {
    return null;
  }

  const imageUrl =
    props.urlToImage && isValidUrl(props.urlToImage)
      ? props.urlToImage
      : defaultImage;

  return (
    <div className="card" style={cardStyle}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt="..."
        style={imageStyle}
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title.slice(0, 40)}...</h5>
        <p className="card-text">{props.description.slice(0, 100)}...</p>
        <p className="card-text">
          <small className="text-muted">
            Published by {props.author} on {props.publishedAt.slice(0, 10)}
          </small>
        </p>
        <Link
          to={props.url}
          className="btn btn-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

// Helper function to check if a string is a valid URL
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

export default NewsItem;
