import { useLoaderData } from "react-router-dom";

const HighestRatedGame = () => {
  const highRatedGames = useLoaderData();
  console.log(highRatedGames)

  return (
    <div className="my-10">
      <h1 className="text-center text-2xl font-bold my-6"> Checkout Some Highest Rated Games :</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
       highRatedGames.map((game,idx) => <div key={idx} className="card card-compact bg-base-100 shadow-xl p-2">
        <figure className="h-[50%]">
          <img
            src={game.photo}
            alt={game.title}
            className="w-[50%] h-[90%] object-contain "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{game.title}</h2>
          <p className="font-medium">Rating : {game.rating}</p>
          <p className="text-sm">{game.details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore Details</button>
          </div>
        </div>
      </div>)
      }
      </div>

      
    </div>
  );
};

export default HighestRatedGame;
