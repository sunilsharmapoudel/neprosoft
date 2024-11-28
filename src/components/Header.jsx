import { NavLink } from "react-router-dom";
import ScheduleButton from "./ScheduleButton";

const Header = () => {
    function animate() {
        document.querySelector('#bar-1').classList.toggle('animate');
        document.querySelector('#bar-2').classList.toggle('animate');
        document.querySelector('#bar-3').classList.toggle('animate');
        document.querySelector('#drawer').classList.toggle('drawer');

    }

    return (
        <>
            <header className="z-10 sticky top-0 w-full border-b-2 bg-white rounded-b-lg shadow-md scroll">
                <div className="mx-auto w-[90%]">
                    <div className="flex justify-between items-center h-28">
                        <div className="logo">
                            <NavLink to="/">
                                <img className="lg:h-10 md:h-8 max-md:h-[1.7rem] w-max" src="/images/rect-tarentparent.svg" alt="neprosoft-logo" />
                            </NavLink>
                        </div>

                        <div className="lg:text-xl md:text-lg max-md:hidden">
                            <ul className="flex items-center lg:space-x-14 md:space-x-5">
                                <NavLink to="/about">
                                    <li className="cursor-pointer hover:border-b-blue-700 hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-blue-700">About us</li></NavLink>
                                <NavLink to="/services"> <li className="cursor-pointer hover:border-b-blue-700 hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-blue-700">Services</li></NavLink>
                                <NavLink to="/contact">
                                    <li className="cursor-pointer hover:border-b-blue-700 hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-blue-700">Contact us</li>
                                </NavLink>
                                <NavLink to="blogs">
                                    <li className="cursor-pointer hover:border-b-blue-700 hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-blue-700">Blogs</li>
                                </NavLink>

                                <ScheduleButton text="Schedule Meeting" />
                            </ul>
                        </div>

                        {
                            <div id="hamburger-icon" className="md:hidden cursor-pointer" onClick={animate}>
                                <span id="bar-1" className="h-1 w-6 mb-1  bg-blue-700 block  rounded-md transition-all"></span>
                                <span id="bar-2" className="h-1 w-6 bg-blue-700 block  rounded-md transition-all"></span>
                                <span id="bar-3" className="h-1 w-6 mt-1  bg-blue-700 block  rounded-md transition-all"></span>
                            </div>
                        }


                    </div>
                </div>

                <div id="drawer" className="drawer flex fixed items-center h-full w-full md:hidden transition-all bg-white">
                    <div className="absolute left-0 right-0 top-20">
                        <ul className="flex flex-col items-center space-y-8 text-xl ">
                            <li className="cursor-pointer hover:border-b-blue-700 hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem]  hover:text-blue-700">About us</li>
                            <li className="cursor-pointer hover:border-b-blue-700 hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-blue-700 ">Services</li>
                            <li className="cursor-pointer hover:border-b-blue-700 hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-blue-700">Contact us</li>
                            <li className="cursor-pointer hover:border-b-blue-700 hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-blue-700">Blogs</li>
                            <li className="border-2 p-2 max-md:p-1 rounded-xl border-black cursor-pointer hover:bg-blue-700 hover:border-blue-600 hover:text-white transition-all">Schedule Meeting</li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
