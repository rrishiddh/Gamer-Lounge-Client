import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Fade } from "react-awesome-reveal";



const AddReview = () => {
    const { user } = useContext(AuthContext); 
  const [formData, setFormData] = useState({
    gameTitle: "",
    gameThumbnail: "",
    reviewDescription: "",
    rating: "",
    year: "",
    genre: "Action",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const reviewData = {
      ...formData,
      userEmail: user.email,
      userName: user.displayName,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then(res => res.json())
      .then(data => {
        alert("Review submitted successfully!");
        setFormData({
          gameTitle: "",
          gameThumbnail: "",
          reviewDescription: "",
          rating: "",
          year: "",
          genre: "Action",
        });
      })
  };


    return (
      <>
        <div className="min-h-screen justify-center items-center" >  
        <h2 className="text-2xl font-semibold pt-2 text-center"> Add Review</h2>
        <p className="font-light text-center py-2 mb-6">Write Something About The Games You Love The Most!</p>           
               <div className="flex justify-center items-center">
      <div className="card  bg-base-300 md:w-full max-w-[80%] shrink-0 p-10">
        
        <Fade cascade >

        <form onSubmit={handleSubmit} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

       {/* Game Title */}
       <div className="form-control">
              <label className="label">
                <span className="label-text">Game Title</span>
              </label>
              <input
                name="gameTitle"
                type="text"
                placeholder="game title"
                className="input input-bordered"
                value={formData.gameTitle}
                onChange={handleChange}
                required
              />
            </div>

            {/* Thumbnail */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Thumbnail</span>
              </label>
              <input
                name="gameThumbnail"
                type="text"
                placeholder="thumbnail-URL"
                className="input input-bordered"
                value={formData.gameThumbnail}
                onChange={handleChange}
                required
              />
            </div>

            {/* Review Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review Description</span>
              </label>
              <input
                name="reviewDescription"
                placeholder="detailed review"
                className="textarea textarea-bordered"
                value={formData.reviewDescription}
                onChange={handleChange}
                required
              />
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                name="rating"
                type="number"
                placeholder="rating(1-10)"
                min="1"
                max="10"
                className="input input-bordered"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </div>

            {/* Publishing Year */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Publishing Year</span>
              </label>
              <input
                name="year"
                type="number"
                placeholder="year"
                className="input input-bordered"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>

            {/* Genre */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <select
                name="genre"
                className="select select-bordered"
                value={formData.genre}
                onChange={handleChange}
              >
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
                <option value="Strategy">Strategy</option>
              </select>
            </div>

            {/* User Email*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                value={user?.email || ""}
                readOnly
              />
            </div>

            {/* User Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={user?.displayName || ""}
                readOnly
              />
            </div>
          </div>
          <div className="form-control w-[50%] mx-auto mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </Fade>
      </div>
      </div>
    </div>
    </>
  );
};
export default AddReview;