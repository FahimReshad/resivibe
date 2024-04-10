import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import 'animate.css';
import { Helmet } from "react-helmet-async";
const UserProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [userData, setUserData] = useState(user);

  const handleUpdate = async () => {
    const updateUser = await updateUserProfile(user);
    setUserData(updateUser);
  };

  useEffect(() => {
    console.log("user:", userData);
  }, [userData]);

  return (
    <div className="mx-auto my-10 flex max-w-[350px] flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 font-sans shadow-lg dark:bg-[#18181B] animate__animated animate__fadeInTopRight">
        <Helmet>
            <title>ResiVibe || UserProfile</title>
        </Helmet>
      <div className="group relative">
        <img
          width={110}
          height={110}
          className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
          src={userData.photoURL}
          alt=""
        />
        <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
        <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
      </div>
      <div className="space-y-1 text-center">
        <h1 className="text-2xl text-gray-700 dark:text-white/90">
          {userData?.displayName || "No Name"}
        </h1>
      </div>

      <button
        onClick={handleUpdate}
        className="w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500 hover:scale-95  hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]"
      >
        View Profile
      </button>
    </div>
  );
};

export default UserProfile;
