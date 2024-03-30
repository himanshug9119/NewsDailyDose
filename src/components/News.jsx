import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function News() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const pageSize = 20;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=6d72f93a215346a6875c195f5709910f&page=${page}&pageSize=${pageSize}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const jsonData = await res.json();
        setTotalResults(jsonData.totalResults);
        setData(jsonData.articles);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <div className="container">
      <div className="contaiiner">
        <h3 className="text-secondary-emphasis p-2">News Daily Dose</h3>
      </div>
      {isLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="spinner-border text-info m-5"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      {data.length === 0 && !isLoading && (
        <h2 className="text-center">No news available</h2>
      )}
      {!isLoading && data.length > 0 && (
        <h5 className="text-center p-2">
          Showing {data.length} of {totalResults} results
        </h5>
      )}
      {!isLoading && (
        <div className="container d-flex flex-row gap-5 flex-wrap">
          {data.map((element, index) => (
            <NewsItem key={index} {...element} />
          ))}
          <div className="container d-flex justify-content-between mt-3">
            <button
              disabled={page <= 1 || isLoading}
              onClick={handlePrev}
              type="button"
              className="btn btn-secondary"
            >
              &larr; Prev
            </button>
            <button
              disabled={Math.ceil(totalResults / pageSize) <= page || isLoading}
              onClick={handleNext}
              type="button"
              className="btn btn-success"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
