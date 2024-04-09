import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;

    createUser(email, password).then(() => {
      updateUserProfile(name, photoURL).then(() => {
        navigate("/");
        toast.success("Registration successfully");
        console.log(email);
      });
    });
  };

  return (
    <div className="hero mt-8">
      <div className="card shrink-0 shadow-2xl bg-base-100 lg:w-2/5">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-poppins text-center">
              My Account!
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="-mt-10 card-body w-full"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-poppins font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                value={user.displayName}
                name="name"
                className="input input-bordered font-poppins font-semibold text-gray-500"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-poppins font-medium">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                value={user.photoURL}
                name="photoURL"
                placeholder=""
                className="input input-bordered font-poppins font-semibold text-gray-500"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-poppins font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                value={user.email}
                name="email"
                className="input input-bordered font-poppins font-semibold text-gray-500"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-poppins font-medium">
                  Phone Number
                </span>
              </label>
              <input
               type="tel"
               name="phoneNumber"
               value={user?.phoneNumber || "No phone number"}
               className="input input-bordered font-poppins font-semibold text-gray-500"
               />
            </div>
            <div className="form-control mt-6 w-full">
              <button className="btn btn-error text-lg font-semibold text-white">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
