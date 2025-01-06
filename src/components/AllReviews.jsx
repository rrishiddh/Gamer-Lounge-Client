import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { Rating } from "@smastrom/react-rating";
import { motion } from "motion/react";


import "@smastrom/react-rating/style.css";

const AllReviews = () => {
  const [allReview, setAllReview] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [filterGenre, setFilterGenre] = useState("All");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://gamer-lounge-server-side.vercel.app/all_reviews"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setAllReview(data);
        setFilteredReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    let reviews = [...allReview];

    if (filterGenre !== "All") {
      reviews = reviews.filter((game) => game.genre === filterGenre);
    }

    if (sortOption === "ratingDesc") {
      reviews.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "yearDesc") {
      reviews.sort((a, b) => b.year - a.year);
    }

    setFilteredReviews(reviews);
  }, [sortOption, filterGenre, allReview]);

  return (
    <div className="w-[90%] mx-auto">
      {allReview && allReview?.length ? (
        <div className="">
          <Slide cascade>
            <div className="my-10">
              <h1 className="text-center text-3xl font-bold my-6 tinos">
                {" "}
                Checkout All Review By Our Gamers!
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2  w-[60%]  mx-auto gap-4 justify-center mb-6">
                <select
                  onChange={(e) => setSortOption(e.target.value)}
                  className="select select-bordered mx-2 bg-slate-50"
                >
                  <option>Sort By :</option>
                  <option value="ratingDesc">ByRating: High to Low</option>
                  <option value="yearDesc">ByYear: Newest to Oldest</option>
                </select>

                <select
                  onChange={(e) => setFilterGenre(e.target.value)}
                  className="select select-bordered mx-2  bg-slate-50"
                >
                  <option value="All">All Genres:</option>
                  {allReview.length > 0 &&
                    [...new Set(allReview.map((game) => game.genre))].map(
                      (genre, idx) => (
                        <option key={idx} value={genre}>
                          {genre}
                        </option>
                      )
                    )}
                </select>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3   gap-4 mx-auto w-[90%]">
             
                {filteredReviews.map((game, idx) => (
                   <motion.div
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.9 }}
                   key={idx}
                            className="card  mx-auto bg-slate-50 shadow-xl p-2 grid-cols-1 grid "
                 >
                    <figure className="w-[50%] mx-auto">
                      <img
                        src={game.gameThumbnail}
                        alt={game.gameTitle}
                        className=" max-sm:mt-4 rounded-lg object-contain "
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl">{game.gameTitle}</h2>
                      <p className="font-medium"><Rating
                  style={{ maxWidth: 100 }}
                  value={game.rating / 2}
                  readOnly
                /></p>
                      <p className="text-sm font-medium">
                        Genre : {game.genre}
                      </p>
                      <p className="text-sm font-medium">
                        Releasing Year : {game.year}
                      </p>
                      <p className="text-sm font-light">
                        {game.reviewDescription}
                      </p>
                      <div className="card-actions justify-end">
                        <Link to={`/review/${game._id}`}>
                        <button className="btn btn-ghost btn-sm bg-gradient-to-r from-[#8ed79f] to-[#71b280]">
                            Explore Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Slide>
        </div>
      ) : (
        <div className="justify-center items-center flex min-h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default AllReviews;
