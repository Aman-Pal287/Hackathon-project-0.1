import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import "./Register.scss";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    dispatch(asyncregisteruser(user));
    navigate("/login");
  };
  return (
    <div className="register-container">
      <form
        onSubmit={handleSubmit(RegisterHandler)}
        className="register-container-form flex flex-col w-1/2 justify-start items-start"
      >
        <h1>Sign up</h1>
        <input
          {...register("username")}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          type="text"
          placeholder="Username *"
        />
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
        <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
          Register User
        </button>
        <p className="mt-5">
          Already have an account?
          <Link className="text-blue-400" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
