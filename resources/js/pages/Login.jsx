import { useState } from "react"
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Login({errors}) {
  const [seen,setSeen] = useState(false);

  const { data, setData, post, reset } = useForm({
    username: '',
    password: '',
    remember: false
  });

  useEffect(() => {
    return () => {
        reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <div className="bg-background h-screen relative text-on-primary flex items-center justify-between container mx-auto px-[5vw]">
      <img src="/assets/images/purpleWave.svg" alt="" className="absolute top-0 right-0 max-h-screen" />
      <section className="login-img h-[80%] w-[60%] z-10 flex flex-col items-center justify-between">
        <img src="/assets/images/Logo.png" className="self-start" alt="" />
        <img src="/assets/images/girl-ondesk.svg" alt="" className="h-[500px]" />
      </section>
      <form onSubmit={submit} className="login-form bg-on-prim-container w-[30%] h-[80%] z-10 flex flex-col items-center gap-4 rounded-3xl py-[70px] px-[40px]">
        <h1 className="text-center text-2xl font-semibold border-b-4 border-on-primary w-[100%] pb-5">WELCOME BACK!</h1>
        <div className="username mt-12 btn-input">
          <input type="text" className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required placeholder='Username'
          value={data.username}
          onChange={e=>setData('username', e.target.value)}
          />
        </div>
        <div className="pass mt-3 btn-input">
          <input type={seen === false? 'password':'text'} className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required placeholder='Password'
          value={data.password}
          onChange={e=>setData('password', e.target.value)}
          />
          <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye-slash':'fa-regular fa-eye'} hover:cursor-pointer`}></i>
        </div>
        <div className="keep flex gap-2 self-start items-center mt-4 mb-7">
          <input type="radio"/>
          <p>Keep me signed in</p>
        </div>
        { errors.username && <div className="text-red-500"><i class="fa-solid fa-circle-exclamation"></i> { errors.username }</div>}
        <button className="btn w-[60%] justify-self-end">LOGIN</button>
        <p className="">Dont have an account? <Link href="/register" className="font-bold">Sign up</Link></p>
      </form>
    </div>
  )
}