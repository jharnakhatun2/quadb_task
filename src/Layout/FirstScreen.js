import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

function FirstScreen() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="container py-5">
        <h2 className="text-center mb-4 bg-danger p-2 text-white text-uppercase">Watch Your Favourite Movies</h2>
        <div className="row ">
          {movieData?.map(({ show }) => {
            return (
              <div
                key={show.id}
                className=" text-center col-xl-4 col-lg-3 col-md-6 col-10 p-lg-2 p-md-3 mx-auto p-0 m-3 "
              >
                <div className="card movie-card hover:shadow-lg">
                  <div className="card-img-block">
                    <img
                      src={show.image.original}
                      alt=""
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="card-body pt-0">
                    <h5 className="card-title">{show.name}</h5>
                    <p className="card-text">{show.summary.slice(0, 100)}</p>
                  </div>
                  <div className="card-body">
                    <Link to={show.name} state={show}>
                      <button
                        type="button"
                        className="btn btn-warning btn-lg btn-block"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default FirstScreen;
