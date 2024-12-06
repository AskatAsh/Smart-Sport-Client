import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const { user, setUser, signInUser, googleSignIn, toastMessage } =
    useContext(AuthContext);

  // handle google login
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        // user info
        const user = result.user;
        setUser(user);
        toastMessage("Login Successful! Going Home..", "success");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((error) => {
        setErrorMessage(error.code);
        setUser(null);
        toastMessage(errorMessage, "error");
      });
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        toastMessage("Login Successful! Going Home..", "success");
        e.target.reset();
        setEmail("");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((error) => {
        setErrorMessage(error.code);
        toastMessage(errorMessage, "error");
      });
  };
  // handle show password
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>SmartSport | Login</title>
        </Helmet>
      </HelmetProvider>
      <div className="hero my-10">
        <div className="hero-content flex-col max-w-96 w-11/12">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              {user && user?.email ? "Already logged in!" : "Login Now! "}
            </h1>
          </div>
          <div className="card bg-base-100 shrink-0 shadow-xl w-full border rounded-none border-gray-900">
            <form onSubmit={handleLogin} className="card-body font-medium">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  // ref={emailRef}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered rounded-none focus:outline-none focus:border focus:border-gray-900"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  <label className="label">
                    <p className="label-text-alt text-gray-600 underline link">
                      Forgot password?
                    </p>
                  </label>
                </label>
                <label className="input input-bordered rounded-none focus-within:outline-none focus-within:border focus-within:border-gray-900 flex items-center gap-2 ">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="grow"
                    required
                  />
                  <button
                    onClick={handleShowPassword}
                    className="text-md text-lightgray"
                  >
                    {showPass ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-900 rounded-none text-white">
                  Login
                </button>
              </div>
              <p className="text-sm text-center">
                Don&apos;t have an account?{" "}
                <Link
                  to={"/register"}
                  className="underline text-hover font-bold"
                >
                  Register
                </Link>
              </p>
              <div className="divider">or</div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline border-lightgray rounded-none"
              >
                <FcGoogle className="text-lg" />
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
