import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import "./Login.scss";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user));
    navigate("/");
    location.reload();
  };

  return (
    <div className="login-container">
      <form
        onSubmit={handleSubmit(LoginHandler)}
        className="login-container-form flex flex-col w-1/2 justify-start items-start"
      >
        <h1>Sign in</h1>
        <input
          {...register("email")}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          type="email"
          placeholder="Email *"
        />
        <input
          {...register("password")}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          type="password"
          placeholder="password *"
        />
        <button className=" mt-5 px-4 py-2 bg-blue-400 rounded">
          Login User
        </button>
        <p className="mt-5">
          Don't have an account?
          <Link className="text-blue-400" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
