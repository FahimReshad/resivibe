import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
  const [userData, setUserData] = useState(user);

  const handleUpdate = async () => {
    const updateUser = await updateUserProfile(user);
    setUserData(updateUser);
  };

  useEffect(() => {
    
  }, [userData]);
  return (
    <div>
        <div className="pointer group relative mx-auto flex w-max justify-center">
       <img className="size-[50px] bg-slate-500 object-cover rounded-lg duration-500" src={userData.photoURL} alt="No photos" />
      <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100  ">
        <p className="rounded-md bg-red-400 px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
          {userData?.displayName || 'User name not found'}
        </p>
        <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-red-400"></span>
      </div>
      {/* Hover button */}
    </div>
    <button className="hidden" onClick={handleUpdate}>hlw</button>
    </div>
  );
};

export default UserProfile;
