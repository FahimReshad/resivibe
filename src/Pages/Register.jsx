import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero mt-8">
      <div className="card shrink-0 shadow-2xl bg-base-100 lg:w-2/5">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-poppins text-center">
              Create Your New Account!
            </h1>
            
          </div>
          <form className="-mt-10 card-body w-full">
          <p className="pt-6 font-semibold font-poppins text-center">
              Don't Have an Account?
              <Link to="/login" className="text-red-500">Log In!</Link>
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
                className="input input-bordered"
                required
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
                placeholder="Photo URl"
                className="input input-bordered"
                required
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
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-poppins font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex items-start gap-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-error"
                />
              </label>
              <p className="font-semibold mt-2">By Registering You Confirm That You Accept <span className="text-red-500">Terms & Conditions</span> and <span className="text-red-500">Privacy Policy</span></p>
            </div>
            <div className="form-control mt-6 w-full">
              <button className="btn btn-error text-lg font-semibold text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
