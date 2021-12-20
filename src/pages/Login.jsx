import InputWithIcon from "../components/ui/InputWithIcon"
import { BeakerIcon } from '@heroicons/react/solid'

import bgLogin from '../imgs/login.jpg'
import { useState } from "react"

import { useNavigate } from "react-router-dom";

import SiteLogo from "../components/ui/SiteLogo"


function Login() {

    let navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/home')
    }

    return (
        <div className="w-full min-h-screen flex items-center bg-contain bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url(${bgLogin})` }}>

            <div className="bg-white/90 rounded-2xl shadow-sm shadow-blue-500/50 max-w-lg ml-28 flex flex-col gap-16 p-8">

                <SiteLogo />

                <div className="flex flex-col">

                    <h3 className="text-xl font-bold text-slate-500 mb-6">Log in to your acccount</h3>

                    <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>

                        <InputWithIcon
                            icon={<BeakerIcon />}
                            value={username}
                            onChange={setUsername}
                            placeholder="Email Address Or Username" />

                        <InputWithIcon
                            type="password"
                            icon={<BeakerIcon />}
                            value={password}
                            onChange={setPassword}
                            placeholder="Password" />

                        <p>
                            Forgot password or having trouble logging in?
                        </p>

                        <button type="submit" className="max-w-max px-10 py-2 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg">Log In</button>

                        <p>
                            Don't have an account?
                        </p>

                        <button type="button" className="max-w-max px-10 py-2 bg-pink-400 text-white rounded-lg">Create account</button>

                    </form>
                </div>

            </div>


        </div>
    )
}

export default Login
