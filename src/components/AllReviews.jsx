import { useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const allReview = useLoaderData();
  console.log(allReview);

  return (
    <div className="">
      <div className="my-10">
        <h1 className="text-center text-2xl font-bold my-6">
          {" "}
          Checkout All Review By Our Gamers:
        </h1>
        <div className="grid grid-cols-1  gap-6">
          {allReview.map((game, idx) => (
            <div
              key={idx}
              className="card w-[80%] mx-auto bg-base-100 shadow-xl p-2 grid grid-cols-2"
            >
              <figure className="w-[50%] mx-auto">
                <img
                  src={game.gameThumbnail}
                  alt={game.gameTitle}
                  className="w-[50%] h-[90%] rounded-lg object-contain "
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
                  <button className="btn btn-primary">Explore Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
