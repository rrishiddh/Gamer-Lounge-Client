import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Zoom  } from "react-awesome-reveal";
import Swal from 'sweetalert2';



const MyReview = () => {
  const data = useLoaderData();
  const [myReview, setMyReview] = useState(data);
  const [selectedReview, setSelectedReview] = useState(null);
  const { user } = useContext(AuthContext);

  const currentUserEmail = user.email;

  useEffect(() => {
    const filteredReviews = data.filter(
      (review) => review.userEmail === currentUserEmail
    );
    setMyReview(filteredReviews);
  }, [data, currentUserEmail]);

  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        if (id) {
          fetch(`https://gamer-lounge-server-side.vercel.app/all_reviews/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {          
              const updatedReviews = myReview.filter((review) => id != review._id);
              setMyReview(updatedReviews);
            });
        }
      }
    });

   
  };

  const handleUpdate = (review) => {
    setSelectedReview(review);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const updatedReview = {
      gameTitle: e.target.gameTitle.value,
      gameThumbnail: e.target.gameThumbnail.value,
      reviewDescription: e.target.reviewDescription.value,
      rating: e.target.rating.value,
      year: e.target.year.value,
      genre: e.target.genre.value,
    };

    fetch(`https://gamer-lounge-server-side.vercel.app/all_reviews/${selectedReview._id}?email=${user.userEmail}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Review updated successfully!",
          icon: "success"
        });
        setSelectedReview(null);
        const updatedReviews = myReview.map((review) =>
          review._id === selectedReview._id
            ? { ...review, ...updatedReview }
            : review
        );
        setMyReview(updatedReviews);
      });
  };
  return (
    <div className="min-h-screen my-10">
      <div className="text-center">
        <h1 className="my-6 text-3xl tinos">Update Your Reviews Here!</h1>
      </div>
      <Zoom >
      { myReview && myReview?.length ? (<div className="overflow-x-auto w-[90%] mx-auto border-2">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Game Title</td>
              <td>Game Thumbnail</td>
              <td>Review Description</td>
              <td>Rating</td>
              <td>Publishing Year</td>
              <td>Genre</td>
              <td>User Email</td>
              <td>User Name</td>
              <td>Actions</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myReview.map((game, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{game.gameTitle}</td>
                <td>{game.gameThumbnail}</td>
                <td>{game.reviewDescription}</td>
                <td>{game.rating}</td>
                <td>{game.year}</td>
                <td>{game.genre}</td>
                <td>{game.userEmail}</td>
                <td>{game.userName}</td>
                <td >
                  <div className="grid grid-cols-1 gap-2 my-auto">
                  <button
                    className="btn btn-sm "
                    onClick={() => handleUpdate(game)}
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=REaAov7RbGMN&format=png&color=000000"
                      className="w-3 h-3 rounded-full"
                    />
                  </button>
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
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td>Game Title</td>
              <td>Game Thumbnail</td>
              <td>Review Description</td>
              <td>Rating</td>
              <td>Year</td>
              <td>Genre</td>
              <td>User Email</td>
              <td>User Name</td>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>) : (<div className="text-center text-xl text-red-500  py-10 ">No Data Available, Add Review First!</div>)
      }
      </Zoom>
      {/* update modal */}
      {selectedReview && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-center mb-6 text-xl ">Update Review</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 md:gap-3" onSubmit={handleModalSubmit}>
              <div className="form-control">
                <label>Game Title</label>
                <input
                  name="gameTitle"
                  type="text"
                  defaultValue={selectedReview.gameTitle}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label>Game Thumbnail (URL)</label>
                <input
                  name="gameThumbnail"
                  type="text"
                  defaultValue={selectedReview.gameThumbnail}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label>Review Description</label>
                <input
                  name="reviewDescription"
                  defaultValue={selectedReview.reviewDescription}
                  className="textarea textarea-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label>Rating</label>
                <input
                  name="rating"
                  type="number"
                  defaultValue={selectedReview.rating}
                  min="1"
                  max="10"
                  className="input input-bordered "
                  required
                />
              </div>

              <div className="form-control">
                <label>Publishing Year</label>
                <input
                  name="year"
                  type="number"
                  defaultValue={selectedReview.year}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label>Genre</label>
                <select
                  name="genre"
                  defaultValue={selectedReview.genre}
                  className="select select-bordered"
                >
                  <option value="Action">Action</option>
                  <option value="RPG">RPG</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Strategy">Strategy</option>
                </select>
              </div>

              <div className="form-control">
                <label>User Email</label>
                <input
                  name="email"
                  type="email"
                  defaultValue={selectedReview.userEmail}
                  className="input input-bordered pointer-events-none select-none"
                  required
                  readOnly
                />
              </div>
              <div className="form-control">
                <label>User Name</label>
                <input
                  name="name"
                  type="name"
                  defaultValue={selectedReview.userName}
                  className="input input-bordered pointer-events-none select-none"
                  required
                  readOnly
                />
              </div>

              <div className="modal-action md:col-span-2">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setSelectedReview(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReview;
