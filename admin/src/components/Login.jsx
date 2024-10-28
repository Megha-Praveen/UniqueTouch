import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';
import { assets } from '../assets/assets';

const Login = ({setToken}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-cover bg-center' style={{ backgroundImage: `url(${assets.login_bg})` }} >
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4 text-pink-950'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 w-full'>
                        <p className='text-sm font-medium text-black mb-2'>Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email}
                            className='rounded-md w-full px-3 py-2 border border-gray-300'
                            type="email"
                            placeholder='your@email.com'
                            required />
                    </div>
                    <div className='mb-3 w-full'>
                        <p className='text-sm font-medium text-black mb-2'>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password}
                            className='rounded-md w-full px-3 py-2 border border-gray-300'
                            type="password"
                            placeholder='Enter your password'
                            required />
                    </div>
                    <button
                        className='bg-pink-950 mt-2 w-full py-2 px-4 text-white rounded-md'
                        type="submit" > Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;