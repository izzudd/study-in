import { useState } from "react"
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Register({ errors }) {
  const [ seen,setSeen ] = useState(false);

  const { data, setData, post, reset } = useForm({
    name: '',
    username: '',
    password: '',
    password_confirmation: '',
    remember: false
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    data.password_confirmation = data.password;
    post('/register');
  };

  return (
    <div className="bg-background h-screen relative text-on-primary flex items-center justify-between px-[5vw]">
      <img src="/assets/images/purpleWave.svg" alt="" className="absolute top-0 right-0 max-h-screen" />
      <section className="login-img h-[80%] w-[60%] z-10 flex flex-col items-center justify-between">
        <img src="/assets/images/Logo.png" className="self-start" alt="" />
        <img src="/assets/images/girl-pointing.svg" alt="" className="h-[500px]" />
      </section>
      <form onSubmit={submit} className="login-form bg-on-prim-container w-[30%] h-[80%] z-10 flex flex-col items-center gap-4 rounded-3xl py-[70px] px-[40px]">
        <h1 className="text-center text-2xl font-semibold border-b-4 border-on-primary w-[100%] pb-5">WELCOME!</h1>
        <div className="name btn-input">
          <input type="text" className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required  placeholder='Name'
          value={data.name}
          onChange={e=>setData('name', e.target.value)}
          />
        </div>
        <div className="username mt-3 btn-input">
          <input type="text" className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required maxLength={8} placeholder='Username'
          value={data.username}
          onChange={e=>setData('username', e.target.value)}
          />
        </div>
        <div className="pass mt-3 btn-input">
          <input type={seen === false? 'password':'text'} className='w-[90%] outline-none bg-on-prim-container text-on-primary placeholder-on-primary' required maxLength={8} placeholder='Password'
          value={data.password}
          onChange={e=>setData('password', e.target.value)}
          />
          <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye-slash':'fa-regular fa-eye'} hover:cursor-pointer`}></i>
        </div>
        <div className="keep flex gap-2 self-start items-center mt-4 mb-9">
          <input type="radio"/>
          <p>Keep me signed in</p>
        </div>
        { errors.username && <div className="text-red-500">{ errors.username }</div>}
        <button className="btn w-[60%] justify-self-end">SIGN UP</button>
        <p className="">Already have an account? <Link className="font-bold" href="/login">Login</Link></p>
      </form>
    </div>
  )
}