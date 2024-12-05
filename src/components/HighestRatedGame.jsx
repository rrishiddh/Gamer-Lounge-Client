import { Link, useLoaderData } from "react-router-dom";

const HighestRatedGame = () => {
  const highRatedGames = useLoaderData();

  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold my-6"> Checkout Some Highest Rated Games :</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
       highRatedGames.map((game,idx) => <div key={idx} className="card card-compact bg-base-100 shadow-xl p-2">
        <figure className="h-[50%]">
          <img
            src={game.gameThumbnail}
            alt={game.gameTitle}
            className="w-[50%] h-[90%] object-contain "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{game.gameTitle}</h2>
          <p className="font-medium">Rating : {game.rating}</p>
          <p className="text-sm">{game.reviewDescription}</p>
          <div className="card-actions justify-end">
          <Link to={`/review/${game._id}`}>
                <button className="btn btn-primary">Explore Details</button>
                </Link>
          </div>
        </div>
      </div>)
      }
      </div>

      
    </div>
  );
};

export default HighestRatedGame;
