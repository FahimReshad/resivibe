import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {

  const {signInUser, googleSignIn, githubSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {email, password} =  data
    signInUser(email, password)
    .then(result => {
      console.log(result.user)
      navigate('/')
      toast.success('You login successfully')
    })
    .catch(error => console.log('password do not match', error.message))
    toast.error('This email does not match the registered email')
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result=> {
      console.log(result.user)
      navigate('/')
      toast.success('You login successfully')
    })
    .catch(error => console.error(error))
  }


  const handleGithubSignIn = () => {
    githubSignIn()
    .then(result => {
      console.log(result);
      navigate('/')
      toast.success('You login successfully')
    })
    .catch(error => {
      console.log(error)
    })
  }




    return (
        <div className="hero mt-8">
          <div className="card shrink-0 shadow-2xl bg-base-100 lg:w-2/5">
          <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="lg:text-3xl font-bold font-poppins text-center">Login now!</h1>
          </div>
            <form  onSubmit={handleSubmit(onSubmit)} className="-mt-10 card-body w-full">
            <p className="pt-6 font-semibold font-poppins text-center">Don't Have an Account?  <Link to="/register"><span className="text-red-500">Register Now!</span></Link></p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-poppins font-medium">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })}required />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-poppins font-medium">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="form-control mt-6 w-full">
                <button className="btn btn-error">Login</button>
              </div>
              <div className="divider"><span className="border rounded-full px-2 bg-slate-50 font-semibold">OR LOGIN IN WITH</span></div>
              <div className="w-full flex gap-3 justify-center">
                <button onClick={handleGoogleSignIn} className="bg-red-500 text-white px-2 md:px-5 py-2 rounded-md flex items-center gap-2"><FaGoogle></FaGoogle> Google</button>
                <button onClick={handleGithubSignIn} className="bg-slate-800 text-white px-2 md:px-6 py-2 rounded-md flex items-center gap-2"><FaGithub></FaGithub> Github</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;