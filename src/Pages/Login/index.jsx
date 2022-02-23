import { Login } from "./Login.style";

const LoginPage = () => {
  const login = () => {};
  const register = () => {};
  return (
    <Login>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt=""
      />
      <form action="">
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Profile Picture Url(optional)" />

        <button type="submit" onClick={login}>
          Join
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login-register" onClick={register}>
          Register
        </span>
      </p>
    </Login>
  );
};

export default LoginPage;
