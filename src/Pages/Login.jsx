import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="hero mt-8">
          <div className="card shrink-0 shadow-2xl bg-base-100 lg:w-2/5">
          <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="lg:text-3xl font-bold font-poppins text-center">Login now!</h1>
          </div>
            <form className="-mt-10 card-body w-full">
            <p className="pt-6 font-semibold font-poppins text-center">Don't Have an Account?  <Link to="/register"><span className="text-red-500">Register Now!</span></Link></p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-poppins font-medium">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-poppins font-medium">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6 w-full">
                <button className="btn btn-error">Login</button>
              </div>
              <div className="divider"><span className="border rounded-full px-2 bg-slate-50 font-semibold">OR LOGIN IN WITH</span></div>
              <div className="w-full flex gap-3 justify-center">
                <button className="bg-blue-800 text-white px-1 md:px-4 py-2 rounded-md flex items-center gap-2"><FaFacebookF></FaFacebookF> Facebook</button>
                <button className="bg-red-500 text-white px-2 md:px-5 py-2 rounded-md flex items-center gap-2"><FaGoogle></FaGoogle> Google</button>
                <button className="bg-slate-800 text-white px-2 md:px-6 py-2 rounded-md flex items-center gap-2"><FaGithub></FaGithub> Github</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;