import { useState } from "react";
import { useForm } from "@inertiajs/react";

const ChangeProfile = ({handler, userData}) => {
    const [picture, setPicture] = useState(userData.photo);

    const { data, setData, post } = useForm({
        fullName: userData.full_name,
        username: userData.username,
        photo: null,
    })
    
    const previewPicture = (input) => {
        const files = input.target.files;
        if (files && files[0]) {
            const reader = new FileReader();
            reader.onload = (rawPicture) => setPicture(rawPicture.target.result);
            reader.readAsDataURL(files[0]);
        }
        console.log(data);
    }

    const submit = (e) => {
        e.preventDefault();
        post('/dashboard');
        handler();
    }

    return (
        <div className="fixed z-50 top-0 bg-opacity-30 flex justify-center items-center w-screen h-screen bg-slate-500">
            <form onSubmit={submit} className="login-form bg-on-prim-container w-[30%] z-10 flex flex-col items-center gap-6 rounded-3xl py-[70px] px-[40px] text-on-primary">
                <h1 className="text-center text-3xl font-semibold border-b-4 border-on-primary w-[100%] pb-5">Change Profile</h1>
                <label className="cursor-pointer">
                    {!picture ? 
                        <i className="fa-solid fa-user-pen text-9xl h-full"></i> :
                        <img src={picture} alt="profile-picture" className="rounded-full overflow-hidden aspect-square w-48 object-cover" /> 
                    }
                    <input className="hidden" type="file" onChange={(e) => {
                        setData('photo', e.target.files[0]);
                        previewPicture(e);
                    }} />
                </label>
                <div className="pass mt-3 btn-input">
                    <input
                        onChange={e => setData('fullName', e.target.value)} 
                        type='text' className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary'
                        required 
                        value={data.fullName}
                        placeholder='New username'
                    />
                </div>
                <div className="pass btn-input">
                    <input
                        onChange={e => setData('username', e.target.value)} 
                        type='text' className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary'
                        required 
                        value={data.username}
                        placeholder='New username'
                    />
                </div>
                {/* { errors.username && <div className="text-red-500"><i className="fa-solid fa-circle-exclamation"></i> { errors.username }</div>} */}
                <div className="buttons flex w-full items-center justify-center gap-3 mt-5">
                    <button className="btn-primary" onClick={handler}>Close</button>
                    <button className="btn-primary">Save Change</button>
                </div>
            </form>
        </div>
    );
}
 
export default ChangeProfile;