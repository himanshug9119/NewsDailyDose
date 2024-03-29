import React from "react";
import NewsItem from "./NewsItem";

function News() {
  const data = [
    {
      imgUrl: "https://example.com/image1.jpg",
      title: "Sample News Title 1",
      description: "This is a sample news description for the first news item.",
      detailsUrl: "/news/sample-news-1",
    },
    {
      imgUrl: "https://example.com/image2.jpg",
      title: "Sample News Title 2",
      description:
        "This is a sample news description for the second news item.",
      detailsUrl: "/news/sample-news-2",
    },
    {
      imgUrl: "https://example.com/image3.jpg",
      title: "Sample News Title 3",
      description: "This is a sample news description for the third news item.",
      detailsUrl: "/news/sample-news-3",
    },
    {
      imgUrl: "https://example.com/image4.jpg",
      title: "Sample News Title 4",
      description:
        "This is a sample news description for the fourth news item.",
      detailsUrl: "/news/sample-news-4",
    },
    {
      imgUrl: "https://example.com/image5.jpg",
      title: "Sample News Title 5",
      description: "This is a sample news description for the fifth news item.",
      detailsUrl: "/news/sample-news-5",
    },
  ];

  return (
    <div className="container d-flex flex-row gap-4 flex-wrap mt-2 mb-2 p-2">
      {data.map((element, index) => (
          <NewsItem key={index} {...element} />
      ))}
    </div>
  );
}

export default News;
