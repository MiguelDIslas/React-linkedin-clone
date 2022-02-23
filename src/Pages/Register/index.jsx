import { useState } from "react";
import { Register } from "./Register.style";
import { auth } from "../../firebase";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
  });
  const dispatch = useDispatch();

  const handleChage = (e) => {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const register = async (e) => {
    const errorMessage = {
      position: "top-end",
      icon: "error",
      title: "",
      showConfirmButton: false,
      timer: 1500,
    };

    if (!state.name) {
      errorMessage.title = "Please enter a full name";
      Swal.fire(errorMessage);
    }

    auth
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: state.name,
            photoURL: state.photoURL,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: state.name,
                photoUrl: state.photoURL,
              })
            );
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((error) => {
        errorMessage.title = error.message;
        Swal.fire(errorMessage);
      });
  };
  return (
    <Register>
      <div className="login-div">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
          alt=""
        />
        <form>
          <input
            onChange={handleChage}
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
          />
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
          <input
            onChange={handleChage}
            id="photoURL"
            name="photoURL"
            type="text"
            placeholder="Photo URL (optional)"
          />
        </form>
        <button onClick={register}>Register</button>
        <p>
          Already have an account?{" "}
          <span className="login-register">
            <Link to="/">Sign in</Link>
          </span>
        </p>
      </div>
    </Register>
  );
};

export default RegisterPage;
