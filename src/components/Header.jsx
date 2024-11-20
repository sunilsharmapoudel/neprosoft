const Header = () => {
    return (
        <>
            <div className=" bg-sky-100  w-full h-auto">
                <div className="flex justify-center w-auto h-28">
                    <div className="flex items-center  justify-between w-[90%]">
                        <div className="logo">
                            <img className="lg:h-10 md:h-8 max-md:h-[1.7rem] w-max" src="./images/rect-tarentparent.svg" alt="neprosoft-logo" />
                        </div>
                        <div className="lg:text-xl md:text-md w-[65%] max-md:hidden">
                            <ul className="flex justify-evenly items-center">
                                <li className="cursor-pointer">About us</li>
                                <li className="cursor-pointer">Services</li>
                                <li className="cursor-pointer">Contact us</li>
                                <li className="cursor-pointer">Blogs</li>
                                <li className="border-2 p-2 max-md:p-1 rounded-xl border-black cursor-pointer hover:bg-slate-500 hover:border-blue-600 hover:text-white transition-all">Schedule Meeting</li>
                            </ul>
                        </div>
                        <div className="cursor-pointer">
                            <span className="h-1 w-7 mb-1  bg-blue-700 block  rounded-md"></span>
                            <span className="h-1 w-7 bg-blue-700 block  rounded-md"></span>
                            <span className="h-1 w-7 mt-1  bg-blue-700 block  rounded-md"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
