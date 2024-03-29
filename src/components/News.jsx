import React from "react";
import NewsItem from "./NewsItem";
import {useState, useEffect} from 'react'
function News() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
          const res = await fetch(
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=6d72f93a215346a6875c195f5709910f"
          );
          if(!res.ok){
            throw new Error("Something went wrong")
          }
          const jsonData = await res.json();
          // console.log(jsonData.articles[0]);
          setData(jsonData.articles);
      }catch(error){
          console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container d-flex flex-row gap-4 flex-wrap mt-2 mb-2 p-2">
      {data.map((element, index) => (
          <NewsItem key={index} {...element} />
      ))}
    </div>
  );
}

export default News;
