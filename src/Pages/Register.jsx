import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    if (password.length < 6) {
      toast.error("Password should be at least 6 character or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error(
        "Your password should have at least one UpperCase Characters"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error(
        "Your password should have at least one LowerCase Characters"
      );
      return;
    }
    createUser(email, password).then((result) => {
      console.log(result);
      navigate("/");
      toast.success("Registration successfully");
    });
  };

  return (
    <div className="hero mt-8">
      <Helmet>
        <title>ResiVibe || Register</title>
      </Helmet>
      <div className="card shrink-0 shadow-2xl bg-base-100 lg:w-2/5">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-poppins text-center">
              Create Your New Account!
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="-mt-10 card-body w-full"
          >
            <p className="pt-6 font-semibold font-poppins text-center">
              Don't Have an Account?
              <Link to="/login" className="text-red-500">
                Log In!
              </Link>
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-poppins font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="font-poppins font-semibold mt-2 text-red-400">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-poppins font-medium">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URl"
                className="input input-bordered"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <span className="font-poppins font-semibold mt-2 text-red-400">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-poppins font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="font-poppins font-semibold mt-2 text-red-400">
                  This field is required
                </span>
              )}
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-poppins font-medium">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? 'text' : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="font-poppins font-semibold mt-2 text-red-400">
                  This field is required
                </span>
              )}
              <span onClick={() => setShowPassword(!showPassword)} className="absolute top-12 right-6 text-xl">
                {
                  showPassword ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>
                }
              </span>
            </div>
            <div className="flex items-start gap-2">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-error" />
              </label>
              <p className="font-semibold mt-2">
                By Registering You Confirm That You Accept{" "}
                <span className="text-red-500">Terms & Conditions</span> and{" "}
                <span className="text-red-500">Privacy Policy</span>
              </p>
            </div>
            <div className="form-control mt-6 w-full">
              <button className="btn btn-error text-lg font-semibold text-white">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
