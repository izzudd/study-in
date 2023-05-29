import { useState } from "react";

const ChangePassword = ({handler}) => {
    const [seen,setSeen] = useState(false);

    return (
        <div className="fixed z-50 top-0 bg-opacity-30 flex justify-center items-center w-screen h-screen bg-slate-500">
            <form className="login-form bg-on-prim-container w-[30%] z-10 flex flex-col items-center gap-4 rounded-3xl py-[70px] px-[40px] text-on-primary">
                <h1 className="text-center text-3xl font-semibold border-b-4 border-on-primary w-[100%] pb-5">Change Password</h1>
                <div className="pass mt-3 btn-input">
                    <input type={seen === false? 'password':'text'} className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required placeholder='Old Password'
                    />
                    <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye-slash':'fa-regular fa-eye'} hover:cursor-pointer`}></i>
                </div>
                <div className="pass mt-3 btn-input">
                    <input type={seen === false? 'password':'text'} className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required placeholder='New Password'
                    />
                    <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye-slash':'fa-regular fa-eye'} hover:cursor-pointer`}></i>
                </div>
                <div className="pass mt-3 btn-input">
                    <input type={seen === false? 'password':'text'} className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required placeholder='Retype new Password'
                    />
                    <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye-slash':'fa-regular fa-eye'} hover:cursor-pointer`}></i>
                </div>
                {/* { errors.username && <div className="text-red-500"><i class="fa-solid fa-circle-exclamation"></i> { errors.username }</div>} */}
            <div className="buttons flex w-full items-center justify-center gap-3 mt-5">
                <button className="btn-primary"  onClick={handler} >Close</button>
                <button className="btn-primary">Save Change</button>
            </div>
            </form>
        </div>
    );
}
 
export default ChangePassword;