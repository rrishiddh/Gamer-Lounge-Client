import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();
  const selectedGame = data.find((game) => game._id === id);
  

  const handleAddToWatchList = () => {
    const watchListItem = {
      gameId: selectedGame._id,
      gameTitle: selectedGame.gameTitle,
      gameThumbnail: selectedGame.gameThumbnail,
      reviewDescription: selectedGame.reviewDescription,
      rating: selectedGame.rating,
      year: selectedGame.year,
      genre: selectedGame.genre,
      userEmail: user.email,
      userName: user.displayName,
    };
    setIsDisabled(true);

    fetch("http://localhost:5000/myWatchList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchListItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added to WatchList successfully!");
        } else if (data.message === "Game already in WatchList") {
          alert("This game is already in your WatchList.");
        } else {
          alert("Failed to add to WatchList. Try again!");
        }
      })
      .catch((error) => {
        alert("An error occurred while adding to WatchList.",error);
      })
      .finally(() => {
        setIsDisabled(false);
      });
  };


  return (
    <div>
      <h1 className="my-6 font-bold text-2xl text-center w-[80%] mx-auto">
        A Page All About Your Favorite Game - {selectedGame.gameTitle}{" "}
      </h1>
      <div className="card w-[80%] mx-auto bg-base-100 shadow-xl p-2 grid grid-cols-1 ">
        <figure className="w-[50%] mx-auto">
          <img
            src={selectedGame.gameThumbnail}
            alt={selectedGame.gameTitle}
            className="w-[50%] h-[100%] rounded-xl object-contain "
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-center font-bold text-xl">
            {selectedGame.gameTitle}
          </h2>
          <p className="font-medium">Rating : {selectedGame.rating}</p>
          <p className="text-sm font-medium">Genre : {selectedGame.genre}</p>
          <p className="text-sm font-medium">
            Releasing Year : {selectedGame.year}
          </p>
          <p className="text-sm font-light">{selectedGame.reviewDescription}</p>
          <p className="text-sm font-medium italic">
            Reviewed By : {selectedGame.userName}
          </p>
          <p className="text-sm font-medium italic">
            Reviewer Email : {selectedGame.userEmail}
          </p>
          <div className="card-actions justify-center">
            {user && user?.email ? (
              <button className="btn btn-sm btn-primary"       disabled={isDisabled}
              onClick={handleAddToWatchList}>
                Add to WatchList
              </button>
            ) : (
                <p className="text-sm italic">Please log in to add to WatchList</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
