import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
//
import {assets} from "../assets/assets.js";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <NavLink to="/">
                <img className="w-36" src={assets.logo} alt="Logo..."/>
            </NavLink>
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

                <NavLink
                    className="flex flex-col items-center gap-1"
                    to="/">
                    <p className="uppercase">Home</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                </NavLink>

                <NavLink
                    className="flex flex-col items-center gap-1"
                    to="/collection">
                    <p className="uppercase">Collection</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                </NavLink>

                <NavLink
                    className="flex flex-col items-center gap-1"
                    to="/about">
                    <p className="uppercase">About</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                </NavLink>

                <NavLink
                    className="flex flex-col items-center gap-1"
                    to="/contact">
                    <p className="uppercase">Contact</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                </NavLink>
            </ul>
            <div className="flex items-center gap-6">
                <img className="w-5 cursor-pointer" src={assets.search_icon} alt="search icon"/>
                <div className="group relative">
                    <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile icon"/>
                    <div className="group-hover:block hidden absolute drop-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black"> My Profile</p>
                            <p className="cursor-pointer hover:text-black"> Orders</p>
                            <p className="cursor-pointer hover:text-black"> Logout</p>
                        </div>
                    </div>
                </div>
                <Link className="relative" to="/cart">
                    <img className="w-5 min-w-5" src={assets.cart_icon} alt="Cart"/>
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
                </Link>
                <img className="w-5 cursor-pointer sm:hidden" src={assets.menu_icon} alt="Menu Icon"
                     onClick={() => setVisible((true))}/>
            </div>
            {/*    Sidebar menu for small screens*/}
            <div
                className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
                <div className="flex flex-col text-gray-600">
                    <div className="flex items-center gap-4 p-3 cursor-pointer"
                         onClick={() => setVisible(false)}>
                        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Dropdown Icon"/>
                        <p>Back</p>
                    </div>
                    <NavLink className="py-2 pl-6 border uppercase hover:bg-gray-200"
                             onClick={() => setVisible(false)}
                             to="/">
                        Home
                    </NavLink>
                    <NavLink className="py-2 pl-6 border uppercase hover:bg-gray-200"
                             onClick={() => setVisible(false)}
                             to="/collection">
                        Collection
                    </NavLink>
                    <NavLink className="py-2 pl-6 border uppercase hover:bg-gray-200"
                             onClick={() => setVisible(false)}
                             to="/about">
                        About
                    </NavLink>
                    <NavLink className="py-2 pl-6 border uppercase hover:bg-gray-200"
                             onClick={() => setVisible(false)}
                             to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;