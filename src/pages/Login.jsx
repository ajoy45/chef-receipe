import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider';

const Login = () => {
    const{signIn,isLoading}=useContext(authContext)
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    // console.log(email,password)
    if(isLoading){
        return<h1>loading...</h1>
    }
    
    const handelSinIn=(e)=>{
        e.preventDefault()
        signIn(email,password)
        .then(result => {
            // Signed in 
            const logInUser = result.user;
            console.log(logInUser)
            
                
            
            
          })
          .catch((error) => {
            console.log(error)
          });
    }
   
    return (
        <div>
            <div className='flex justify-center my-24'>

                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <h1 className='text-center text-3xl font-bold'>Please Login</h1>
                    <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                        <form onSubmit={handelSinIn}>
                            
                            <div className="mb-6">
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Your Email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    name='password'
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                />
                            </div>
                           
                             <div className='mb-5'>
                                  New ?<Link className='cursor-pointer text-blue-500' to='/register'> Go to Register </Link>
                             </div>
                           
                            <div className='mb-5'>
                                <input
                                    type="submit"
                                    value='Login'
                                    className="bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                                />

                            </div>
                        </form>
                        <div className='mb-5'>
                                <button
                                    className="bg-purple-300 border-0 w-full rounded  p-3 text-white transition hover:bg-opacity-90"
                                > Google SignIn </button>

                            </div>
                            <div className='mb-5'>
                                <button
                                    className="bg-purple-300 border-0 w-full rounded  p-3 text-white transition hover:bg-opacity-90"
                                > GitHub SignIn </button>

                            </div>
                        <div>
                            <span className="absolute -top-10 -right-9 z-[-1]">
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                            <span className="absolute -right-10 top-[90px] z-[-1]">
                                <svg
                                    width="34"
                                    height="134"
                                    viewBox="0 0 34 134"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="31.9993"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 1.66665)"
                                        fill="#13C296"
                                    />
                                </svg>
                            </span>
                            <span className="absolute -left-7 -bottom-7 z-[-1]">
                                <svg
                                    width="107"
                                    height="134"
                                    viewBox="0 0 107 134"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="104.999"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 104.999 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 104.999 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 104.999 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 104.999 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 104.999 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 104.999 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 104.999 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 104.999 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 104.999 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 104.999 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 1.66665)"
                                        fill="#13C296"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;