import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Zoom  } from "react-awesome-reveal";
import Swal from 'sweetalert2';


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

 const handleDelete = (id) => {
    if (id) {
      fetch(`https://gamer-lounge-server-side.vercel.app/myWatchList/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "WatchList deleted successfully!",
            icon: "success"
          });
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
      <Zoom >
     { myWatchList && myWatchList?.length ? (<div className="overflow-x-auto w-[90%] mx-auto">
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
            {
              myWatchList.map((game, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{game.gameTitle}</td>
                  <td>{game.reviewDescription}</td>
                  <td>{game.rating}</td>
                  <td>{game.year}</td>
                  <td>{game.genre}</td>
                  <td >  
                    <div className="grid grid-cols-1 gap-2 my-auto">        
                    <button
                      className="btn btn-sm"
                      onClick={() => handleDelete(game._id)}
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=99940&format=png&color=000000"
                        className="w-3 h-3 rounded-full"
                      />
                    </button>
                    </div>       
                  </td>
                </tr>
              ))
            }
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
      </div>) : (<div className="text-center text-xl text-red-500 py-10">No Data Available, Add WatchList First!</div>)
     }
     </Zoom>
      
    </div>
  );
};

export default MyWatchList;
