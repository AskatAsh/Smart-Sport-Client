import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordValid, setPasswordValid] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const { createUser, updateUser, setUser, googleSignIn, toastMessage } =
    useContext(AuthContext);

  // sign up with google
  const handleGoogleSignUp = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        // user info
        const user = result.user;
        setUser(user);
        toastMessage("Sign up Successful!", "success");
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

  // handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo_url = form.get("photo_url");
    const password = form.get("password");

    // check password validity
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordValid(false);
      return;
    }

    // Create user with email and password
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        e.target.reset();
        toastMessage("Account Created Successfully!", "success");
        // update user with name and image url
        const profile = { displayName: name, photoURL: photo_url };
        updateUser(profile)
          .then(() => {
            setUser((prev) => ({
              ...prev,
              displayName: name || newUser.displayName,
              photoURL: photo_url || newUser.photoURL,
            }));
            setTimeout(() => {
              navigate("/");
            }, 2500);
          })
          .catch((error) => {
            setErrorMessage(error.code);
            toastMessage(errorMessage, "error");
          });
      })
      .catch((error) => {
        setErrorMessage(error.code);
        setUser(null);
        toastMessage(errorMessage, "error");
      });
  };

  // handle show password
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  // check password validity
  const checkPassword = (e) => {
    const password = e.target.value;
    if (password.length === 0) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>SmartSport | Register</title>
        </Helmet>
      </HelmetProvider>
      <div className="hero my-10">
        <div className="hero-content flex-col max-w-96 w-11/12">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl relative">
            <form className="card-body" onSubmit={handleSignUp}>
              {/* username */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* image url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Link</span>
                </label>
                <input
                  type="text"
                  name="photo_url"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* password */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    onFocus={() => setPasswordValid(false)}
                    onBlur={() => setPasswordValid(true)}
                    onChange={checkPassword}
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="grow"
                    required
                  />
                  <button
                    onClick={handleShowPassword}
                    className="text-xl text-lightgray"
                  >
                    {showPass ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </label>

                {/* password notificaton */}
                <div
                  className={`p-3 max-w-[280px] rounded-xl z-50 absolute top-20 left-1 shadow-lg bg-bglight ${
                    !passwordValid ? "block" : "hidden"
                  }`}
                >
                  <p className="text-sm font-semibold text-left mb-1">
                    Password -
                  </p>
                  <ul className="list-disc ml-5 text-left text-sm">
                    <li>must be at least 6 characters long.</li>
                    <li>Contain at least one lowercase letter.</li>
                    <li>Contain at least one uppercase letter.</li>
                  </ul>
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-primary text-white">
                  Sign Up
                </button>
              </div>
              <p className="text-sm text-center">
                Already have an account?{" "}
                <Link
                  to={"/auth/login"}
                  className="underline text-hover font-bold"
                >
                  Login
                </Link>
              </p>
              <div className="divider">or</div>
              <button
                onClick={handleGoogleSignUp}
                className="btn btn-outline border-lightgray"
              >
                <FcGoogle className="text-lg" />
                Sign up with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
