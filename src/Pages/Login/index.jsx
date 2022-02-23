import { useState } from "react";
import { Login } from "./Login.style";
import { auth } from "../../firebase";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChage = (e) => {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const loginApp = async (e) => {
    e.preventDefault();
    const errorMessage = {
      position: "center",
      icon: "error",
      title: "",
      showConfirmButton: false,
      timer: 1500,
    };

    const userAuth = await signInWithEmailAndPassword(
      auth,
      state.email,
      state.password
    );

    dispatch(
      login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoURL,
      })
    );

    // auth
    //   .signInWithEmailAndPassword(state.email, state.password)
    //   .catch((error) => {
    //     errorMessage.title = error.message;
    //     Swal.fire(errorMessage);
    //   })
    //   .then((userAuth) => {

    //   });
  };

  return (
    <Login>
      <div className="login-div">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
          alt=""
        />
        <form onSubmit={loginApp}>
          <input
            onChange={handleChage}
            id="email"
            required
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={handleChage}
            id="password"
            required
            name="password"
            type="password"
            placeholder="Password"
          />

          <button type="submit" onClick={login}>
            Sign in
          </button>
        </form>
        <p>
          Not a member?{" "}
          <span className="login-register">
            <Link to="/register">Join</Link>
          </span>
        </p>
      </div>
    </Login>
  );
};

export default LoginPage;
