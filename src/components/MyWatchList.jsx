import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const MyWatchList = () => {
  const data = useLoaderData();
  const [myWatchList, setMyWatchList] = useState([]);
  const { user } = useContext(AuthContext);

  const currentUserEmail = user.email;

  useEffect(() => {
    const filteredWatchList = data.filter(
      (watchList) => watchList.userEmail === currentUserEmail
    );

    const uniqueWatchList = [];
    const seen = new Set();

    filteredWatchList.forEach((watchList) => {
      if (!seen.has(watchList.gameId)) {
        seen.add(watchList.gameId);
        uniqueWatchList.push(watchList);
      }
    });

    setMyWatchList(uniqueWatchList);
  }, [data, currentUserEmail]);

 console.log(myWatchList )
 const handleDelete = (id) => {
    if (id) {
      fetch(`http://localhost:5000/myWatchList/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("WatchList deleted successfully!");
          const updatedWatchList = myWatchList.filter((watchList) => id != watchList._id);
          setMyWatchList(updatedWatchList);
        });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="text-center">
        <h1 className="my-6 text-2xl">Find Your WatchList Here!</h1>
      </div>
      <div className="overflow-x-auto w-[90%] mx-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Game Title</td>
              <td>Review Description</td>
              <td>Rating</td>
              <td>Publishing Year</td>
              <td>Genre</td>
              <td>Actions</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myWatchList.map((game, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{game.gameTitle}</td>
                <td>{game.reviewDescription}</td>
                <td>{game.rating}</td>
                <td>{game.year}</td>
                <td>{game.genre}</td>
                <td className="grid grid-cols-1 gap-2">                 
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDelete(game._id)}
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=99940&format=png&color=000000"
                      className="w-3 h-3 rounded-full"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td>Game Title</td>
              <td>Review Description</td>
              <td>Rating</td>
              <td>Year</td>
              <td>Genre</td>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyWatchList;
