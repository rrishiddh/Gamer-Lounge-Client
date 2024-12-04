import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { setUser, createNewUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError({ ...error, password: passwordError });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            alert('welcome')
            navigate("/");
          })
          .catch((err) => {
            setError({ ...error, register: err.code });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        setError({ ...error, register: errorCode });
      });
  };

  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError({ ...error, register: errorCode });
      });
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must include at least 1 uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must include at least 1 lowercase letter.";
    }
    return null;
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-300 md:w-full max-w-lg shrink-0 p-10">
          <h2 className="text-2xl font-semibold pt-2 text-center">
            Register Your Account
          </h2>
          <form onSubmit={handelSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo-URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"     
                type="password"          
                placeholder="password"
                className="input input-bordered"
                required
              />                         
                          
            </div>
            {error.password && (
                <label className="label text-sm text-red-600">
                  {error.password}
                </label>
              )}
            {error.register && (
              <label className="label text-sm text-red-600">
                {error.register}
              </label>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Register</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={handelGoogleSignIn} className="btn btn-primary my-4">
            Register With Google
          </button>
          <p className="text-center font-semibold">
            Already have account?{" "}
            <Link to="/auth/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
