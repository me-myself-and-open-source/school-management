import {
    PresentationChartLineIcon,
    AcademicCapIcon
} from "@heroicons/react/outline"

import Calendar from '../components/ui/Calendar'
import bgHeading from '../imgs/developer.jpg'
import bgRecruiter from '../imgs/recruiter.jpg'

function Home() {
    return (
        <div className="w-full px-8 pt-9 space-y-4">

            <div className="flex gap-4 flex-wrap-reverse lg:flex-wrap">

                <div className="bg-white rounded-2xl w-full lg:flex-2 bg-contain bg-no-repeat bg-right" style={{ backgroundImage: `url(${bgHeading})` }}>

                    <div className="h-full p-8 flex flex-col justify-between max-w-md">

                        <h1 className="text-2xl font-semibold text-indigo-800">Howdy Marina!</h1>
                        <p className="text-sm text-slate-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Maiores cum reprehenderit quis pariatur impedit, aperiam rem,
                        </p>
                        <span className="font-semibold text-slate-800">Hor are you feeling today?</span>

                    </div>
                </div>

                <div className="bg-white w-full rounded-2xl lg:flex-1 h-60 p-6">
                    <div>

                        <div className="flex items-center">

                            <div className="relative w-14 h-14">
                                <div className=" absolute right-0 bg-green-500 rounded-full h-4 w-4 border-2 border-transparent"></div>
                                <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" alt="profile" className="rounded-full" />
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

            <div className=" w-full flex flex-wrap">
                <div className="w-full xl:w-7/12 space-y-6" >
                    <div >
                        <h1 className="uppercase font-bold text-slate-800">Quick stats</h1>
                        <div className="flex">

                            <div className="bg-white w-64 h-32 m-4 rounded-2xl shadow-2xl flex items-center px-5">
                                <PresentationChartLineIcon className="w-12 h-12 text-indigo-400" />
                                <div className="ml-4">
                                    <h1 className="text-4xl text-slate-800 font-semibold">850</h1>
                                    <span className="text-slate-800">Teachers</span>
                                </div>
                            </div>

                            <div className="bg-white w-64 h-32 m-4 rounded-2xl shadow-2xl flex items-center px-5">
                                <AcademicCapIcon className="w-12 h-12 text-indigo-400" />
                                <div className="ml-4">
                                    <h1 className="text-4xl text-slate-800 font-semibold">10,511</h1>
                                    <span className="text-slate-800">Students</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h1 className="uppercase font-bold text-slate-800">Top students</h1>

                        <div className="bg-white rounded-xl p-4 space-y-6 text-slate-800">

                            <div className="w-full bg-slate-200 h-14 rounded-xl"></div>

                            <div className="">

                                <div className="flex items-center">

                                    <div className="flex items-center flex-1">

                                        <div className="relative w-14 h-14">
                                            <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" alt="profile" className="rounded-full" />
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

                                    <div className="text-center font-semibold flex-1">
                                        <h1>Grade 10</h1>
                                    </div>

                                    <div className="flex flex-2">
                                        <div className="bg-gray-200 w-full h-6 rounded-lg">
                                            <div className="bg-green-700/70 rounded-lg w-11/12 h-6"></div>
                                        </div>
                                        <span className="mx-4">96%</span>
                                    </div>

                                </div>



                            </div>

                            <div className="">

                                <div className="flex items-center">

                                    <div className="flex items-center flex-1">

                                        <div className="relative w-14 h-14">
                                            <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" alt="profile" className="rounded-full" />
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

                                    <div className="text-center font-semibold flex-1">
                                        <h1>Grade 10</h1>
                                    </div>

                                    <div className="flex flex-2">
                                        <div className="bg-gray-200 w-full h-6 rounded-lg">
                                            <div className="bg-green-700/70 rounded-lg w-11/12 h-6"></div>
                                        </div>
                                        <span className="mx-4">96%</span>
                                    </div>

                                </div>



                            </div>

                            <div className="">

                                <div className="flex items-center">

                                    <div className="flex items-center flex-1">

                                        <div className="relative w-14 h-14">
                                            <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" alt="profile" className="rounded-full" />
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

                                    <div className="text-center font-semibold flex-1">
                                        <h1>Grade 10</h1>
                                    </div>

                                    <div className="flex flex-2">
                                        <div className="bg-gray-200 w-full h-6 rounded-lg">
                                            <div className="bg-green-700/70 rounded-lg w-11/12 h-6"></div>
                                        </div>
                                        <span className="mx-4">96%</span>
                                    </div>

                                </div>



                            </div>

                        </div>

                    </div>
                </div>
                <div className="w-full xl:w-5/12">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default Home
