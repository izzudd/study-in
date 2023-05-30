const Profile = ({user, profile, pass}) => {
    
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl text-center">Welcome, {user.full_name}!</h1>
            <p className="text-center">Information about your profile and preferences in all StudyIn services.</p>
            <div className="profile flex gap-4 mt-16 mb-12 items-center">
                <i onClick={()=>setIsClicked(!isClicked)} className="fa-solid fa-circle-user text-9xl cursor-pointer"></i>
                <div className="details flex flex-col gap-2">
                    <h2 className="text-3xl font-semibold">{user.username}</h2>
                    <p>Name : {user.full_name}</p>
                    <p className="cursor-pointer text-orange-400" onClick={profile}>Change Profile</p>
                    <button className="btn mt-2" onClick={pass}>Change Password</button>
                </div>
            </div>
        </div>
    );
}
 
export default Profile;