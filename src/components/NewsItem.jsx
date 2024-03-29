import React from "react";
import { Link } from "react-router-dom";

function NewsItem(props) {
  const cardStyle = {
    width: "18rem",
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={props.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={props.detailsUrl} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
}

export default NewsItem;
