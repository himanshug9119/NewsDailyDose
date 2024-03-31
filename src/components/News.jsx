import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import EndMessage from "./EndMessage";

function News(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const pageSize = 20;
  const apiKey = props.apiKey;
  const { country, category, setProgress } = props;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setProgress(0);
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const jsonData = await res.json();
        setTotalResults(jsonData.totalResults);
        setData((prevData) => [...prevData, ...jsonData.articles]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
      setProgress(100);
    };
    fetchData();
  }, [page, country, category, apiKey, setProgress]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <div className="container p-4">
      <div className="container text-center">
        <h3 className="text-secondary-emphasis p-1">News Daily Dose</h3>
      </div>
      {isLoading && <Spinner />}
      {data.length === 0 && !isLoading && (
        <h2 className="text-center">No news available</h2>
      )}
      {!isLoading && (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={data.length < totalResults}
          loader={<Spinner />}
          endMessage={<EndMessage />}
        >
          <div className="container d-flex flex-row gap-5 flex-wrap">
            {data.map((element, index) => (
              <NewsItem key={index} {...element} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

News.propTypes = {
  apiKey: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
