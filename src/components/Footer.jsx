import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[--primary] text-white py-10 space-y-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="mb-4 md:mb-0 text-4xl">
                    <span >Neprosoft</span>
                </div>

                <nav className="space-x-4 text-xl">
                    <ul className="flex items-center lg:space-x-14 space-x-5 ">
                        <NavLink to="/about">
                            <li className="cursor-pointer hover:border-b-[--tertiary] hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-[--tertiary]">About us</li></NavLink>
                        <NavLink to="/services"> <li className="cursor-pointer hover:border-b-[--tertiary] hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-[--tertiary]">Services</li></NavLink>
                        <NavLink to="/contact">
                            <li className="cursor-pointer hover:border-b-[--tertiary] hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-[--tertiary]">Contact us</li>
                        </NavLink>
                        <NavLink to="blogs">
                            <li className="cursor-pointer hover:border-b-[--tertiary] hover:border-b-[3px] hover:rounded-sm transition-all hover:translate-y-[0.2rem] hover:text-[--tertiary]">Blogs</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
            <div className="text-center mt-4 text-md text-white">
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
