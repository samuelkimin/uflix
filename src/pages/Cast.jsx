import React, { useEffect, useState } from "react";
import { getTrendingMovieData } from "../api.js";
import CastPreview from "../components/CastPreview";
import "./Cast.css";

function Cast() {
  const [castList, setCastList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getTrendingMovieData("person").then((data) => setCastList(data));
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    getTrendingMovieData("person", nextPage)
      .then((data) => {
        setCastList((prevData) => [...prevData, ...data]);
        setCurrentPage(nextPage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex-containers">
      <h2 className="ch1">Popular Cast(s)</h2>
      <div id="cbarcont">
        {castList.map((cast) => (
          <CastPreview key={cast.id} cast={cast} />
        ))}
      </div>
      <button onClick={handleLoadMore} className="morebutton">
        Load More
      </button>
    </div>
  );
}

export default Cast;
