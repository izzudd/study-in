const Profile = ({user, profile, pass}) => {
    
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl text-center">Welcome, {user.full_name}!</h1>
            <p>Information about your profile and preferences in all StudyIn services.</p>
            <div className="profile flex gap-4 mt-16 mb-12 items-center">
                <img src={user.photo} alt="profile-picture" className="rounded-full overflow-hidden aspect-square w-48 object-cover" /> 
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