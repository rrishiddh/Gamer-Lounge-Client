import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  
  const handelSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email,password)
    .then(result => {
      const user = result.user;
      setUser(user)
      navigate(location?.state ? location.state : "/") 
    })
    .catch((err)=> {
      setError({ ...error, login: err.code })
     })

  }
  const handelGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(result=>{
      const user = result.user;
      setUser(user)
      navigate(location?.state ? location.state : "/") 
    }).catch((err)=> {
      setError({ ...error, login: err.code })
     })
  }

  
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card  bg-base-300 md:w-full max-w-lg shrink-0 p-10">
        <h2 className="text-2xl font-semibold pt-2 text-center">Login To Your Account</h2>
        <form onSubmit={handelSubmit} className="card-body">
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
          {
              error.login && (
                <label className="label text-sm text-red-600">
                  {error.login}
                </label>
              )
            }
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
        </form>
        <div className="divider">OR</div>
        <button onClick={handelGoogleSignIn} className="btn btn-primary my-4">Sign In With Google</button>
        <p className="text-center font-semibold">Don&apos;t have account? <Link to='/auth/register' className="text-blue-500 underline">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
