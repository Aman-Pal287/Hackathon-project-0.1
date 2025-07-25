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
    console.log(user);
    user.id = nanoid();
    user.isAdmin = user.isAdmin === "true"; // radio se string aata hai, convert to boolean
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
        <div className="radio-group">
          <label className="radio-label-title">Is Admin?</label>
          <div className="radio-options">
            <label className="radio-option">
              <input {...register("isAdmin")} type="radio" value="true" />
              Yes
            </label>
            <label className="radio-option">
              <input
                {...register("isAdmin")}
                type="radio"
                value="false"
                defaultChecked
              />
              No
            </label>
          </div>
        </div>

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
