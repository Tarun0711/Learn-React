import React, { useEffect, useState } from "react";
import Newsitem from "./NewsItem";
import "./News.css";
export default function News() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("India");
  const [page,setPage] =useState(1)
  const[totalPage,setTotalPage]=useState(1)
  const pageSize=9;
  
  const fetchData = async () => {
    const data =await fetch(`https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=${pageSize}keyword&apiKey=577147db083f46449921dba74ba62219`)
    const response = await data.json();
    setData(response.articles);
    setTotalPage(response.totalResults/pageSize)
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
 useEffect(()=>{

 })
  const handelNext = () => {

    setPage(page + 1);
  };
  const handelPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter search query"
          className="input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btnn">Search</button>
      </form>
      <div className="main">
        {data ? (
          <ul className="container">
            {data.map((item, index) => (
              <Newsitem
                key={index}
                title={item.title}
                description={item.description}
                img={item.urlToImage}
                url={item.url}
              />
            ))}
          </ul>
        ) : (
          <div>
            <h1>Please enter a query to make a search</h1>
          </div>
        )}
      </div>
      <div>
        <button onClick={handelPrev} >Prev</button>
        <button onClick={handelNext}>Next</button>
      </div>
    </>
  );
}
