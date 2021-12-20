import bgHeading from '../imgs/developer.jpg'

function Home() {
    return (
        <div className="w-full px-8 pt-9 space-y-4">

            <div className="flex flex-wrap gap-4">

                <div className="bg-white rounded-2xl w-full md:flex-2 bg-contain bg-no-repeat bg-right" style={{ backgroundImage: `url(${bgHeading})` }}>

                    <div className="h-full p-8 flex flex-col justify-between max-w-md">

                        <h1 className="text-2xl font-semibold text-indigo-800">Howdy Marina!</h1>
                        <p className="text-sm text-slate-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Maiores cum reprehenderit quis pariatur impedit, aperiam rem,
                        </p>
                        <span className="font-semibold text-slate-800">Hor are you feeling today?</span>

                    </div>
                </div>

                <div className="bg-white w-full rounded-2xl md:flex-1 h-60 p-6">
                    <div>

                        <div className="flex items-center">

                            <div className="relative w-14 h-14">
                                <div className=" absolute right-0 bg-green-500 rounded-full h-4 w-4 border-2 border-transparent"></div>
                                <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" className="rounded-full" />
                            </div>

                            <div className="ml-2 flex flex-col">
                                <span className="font-bold text-slate-800">
                                    Marina Akurugoda
                                </span>
                                <span className="text-slate-400 text-xs">
                                        Super Administrator
                                </span>
                            </div>

                        </div>

                        <div className="flex flex-col mt-8 gap-2 text-sm text-slate-800">

                            <span className="cursor-pointer">Account Settings</span>
                            <span className="cursor-pointer">Manage System</span>
                            <span className="cursor-pointer">Logout</span>

                        </div>

                    </div>
                </div>

            </div>

            <div className="bg-indigo-400 w-full h-full">
                <div></div>
            </div>
        </div>
    )
}

export default Home
