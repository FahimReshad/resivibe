import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import 'animate.css';
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
 const [name, setName] = useState(user.displayName || "");
 const [photoURL, setPhotoURL] = useState(user.photoURL || "");

 console.log(name, photoURL)
    const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
        await updateUserProfile(name, photoURL)
        toast.success('profile updated successfully')
        navigate('/')
    }
    catch (error) {
        toast.error('please try again')
        console.log(error)
    }
  }


  return (
    <div className="hero mt-8 animate__animated animate__backInDown">
      <Helmet>
        <title>ResiVibe || Update Profile</title>
      </Helmet>
      <div className="card shrink-0 shadow-2xl bg-base-100 lg:w-2/5">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-poppins text-center">
              My Account!
            </h1>
          </div>
          <form onSubmit={handleFormSubmit}
            
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
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
                defaultValue={user?.email || ""}
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
               defaultValue={user?.phoneNumber || ""}
               className="input input-bordered font-poppins font-semibold text-gray-500"
               />
            </div>
            <div className="form-control mt-6 w-full">
              <button type="submit" className="btn btn-error text-lg font-semibold text-white">
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
