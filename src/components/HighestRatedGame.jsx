import { Rating } from "@smastrom/react-rating";
import { motion } from "motion/react";


import "@smastrom/react-rating/style.css";
import { Link, useLoaderData } from "react-router-dom";

const HighestRatedGame = () => {
  const highRatedGames = useLoaderData();

  return (
    <div className="my-8 w-[90%] mx-auto">
      <h1 className="text-center text-2xl tinos font-bold my-6">
        {" "}
        Checkout Some <br className="md:hidden" /> Highest Rated Games{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {highRatedGames.map((game, idx) => (
           <motion.div
           whileHover={{ scale: 1.01 }}
           whileTap={{ scale: 0.99 }}
           key={idx} className="card card-compact max-sm:w-[80%] max-sm:mx-auto bg-base-300 shadow-xl p-2"
         >
         
            <figure className="h-[50%] ">
              <img
                src={game.gameThumbnail}
                alt={game.gameTitle}
                className=" object-contain "
              />
            </figure>
            <div className="card-body">
            <p className="text-sm">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={game.rating / 2}
                  readOnly
                />
              </p>
              <h2 className="card-title">{game.gameTitle}</h2>
              
              <p className="text-sm">
                {game.reviewDescription.substring(0, 100) + "..."}
              </p>
              

              <div className="card-actions justify-end">
                <Link to={`/review/${game._id}`}>
                  <button className="btn dark:text-black btn-ghost btn-sm bg-gradient-to-r from-[#8ed79f] to-[#71b280]">
                    See More..
                  </button>
                </Link>
              </div>
            </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGame;
