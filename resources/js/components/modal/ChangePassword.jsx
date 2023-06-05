import { useState } from "react";
import { usePage, useForm } from "@inertiajs/react";

const ChangePassword = ({ handler }) => {
    const [seen, setSeen] = useState(false);

    const { data, setData, post } = useForm({
        old_password: '',
        new_password: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post('/change-password');
        handler();
    }

    return (
        <div className="fixed z-50 top-0 bg-opacity-30 flex justify-center items-center w-screen h-screen bg-slate-500">
            <form onSubmit={submit} className="login-form bg-on-prim-container w-[30%] z-10 flex flex-col items-center gap-4 rounded-3xl py-[70px] px-[40px] text-on-primary">
                <h1 className="text-center text-3xl font-semibold border-b-4 border-on-primary w-[100%] pb-5">Change Password</h1>
                <div className="pass mt-3 btn-input">
                    <input value={data.old_password} onChange={e => setData('old_password', e.target.value)} type={seen === false ? 'password' : 'text'} className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required placeholder='Old Password'
                    />
                    <i onClick={() => setSeen(!seen)} className={`${seen === false ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'} hover:cursor-pointer`}></i>
                </div>
                <div className="pass mt-3 btn-input">
                    <input value={data.new_password} onChange={e => setData('new_password', e.target.value)} type={seen === false ? 'password' : 'text'} className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required placeholder='New Password'
                    />
                    <i onClick={() => setSeen(!seen)} className={`${seen === false ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'} hover:cursor-pointer`}></i>
                </div>
                {/* { errors.username && <div className="text-red-500"><i class="fa-solid fa-circle-exclamation"></i> { errors.username }</div>} */}
                <div className="buttons flex w-full items-center justify-center gap-3 mt-5">
                    <button className="btn-primary" onClick={handler} >Close</button>
                    <button className="btn-primary">Save Change</button>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;