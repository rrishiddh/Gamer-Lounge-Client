import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Slide  } from "react-awesome-reveal";


const AllReviews = () => {
  const allReview = useLoaderData();

 
  const [sortedReviews, setSortedReviews] = useState(allReview);
  const [sortOption, setSortOption] = useState("");
  const [filterGenre, setFilterGenre] = useState("All");

  useEffect(() => {
    let sorted = [...allReview];
    if (sortOption === "ratingAsc") {
      sorted.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === "yearDesc") {
      sorted.sort((a, b) => b.year - a.year);
    }
    if (filterGenre !== "All") {
      sorted = sorted.filter(game => game.genre === filterGenre);
    }
    setSortedReviews(sorted);
  }, [sortOption, filterGenre, allReview]);


  return (
    <div className="">
      <Slide  cascade >
      <div className="my-10">
        <h1 className="text-center text-2xl font-bold my-6">
          {" "}
          Checkout All Review By Our Gamers!
        </h1>

         <div className="flex justify-center mb-6">
          <select
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered mx-2"
          >
            <option >Sort By :</option>
            <option value="ratingAsc">ByRating: Low to High</option>
            <option value="yearDesc">ByYear: Newest to Oldest</option>
          </select>


          <select
            onChange={(e) => setFilterGenre(e.target.value)}
            className="select select-bordered mx-2"
          >
            <option value="All">All Genres:</option>
            {[...new Set(allReview.map(game => game.genre))].map((genre, idx) => (
              <option key={idx} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1  gap-6">
          {sortedReviews.map((game, idx) => (
            <div
              key={idx}
              className="card w-[70%] mx-auto bg-base-100 shadow-xl p-2 grid-cols-1 grid md:grid-cols-2"
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
                <p className="font-medium">Rating : {game.rating}</p>
                <p className="text-sm font-medium">Genre : {game.genre}</p>
                <p className="text-sm font-medium">
                  Releasing Year : {game.year}
                </p>
                <p className="text-sm font-light">{game.reviewDescription}</p>
                <div className="card-actions justify-end">
                <Link to={`/review/${game._id}`}>
                <button className="btn btn-primary">Explore Details</button>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Slide >
    </div>
  );
};

export default AllReviews;
