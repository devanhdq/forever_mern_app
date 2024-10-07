import {assets} from "../assets/assets.js";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div className="">
                    <img src={assets.logo} alt="" className="mb-5 w-32"/>
                    <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam at beatae blanditiis
                        consectetur culpa distinctio doloremque eos et exercitationem illum ipsum iste, laudantium
                        mollitia necessitatibus nemo quisquam recusandae sint ut vitae. Consectetur est impedit
                        inventore placeat quisquam, ratione vero
                    </p>
                </div>

                <div className="">
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/">Delivery</Link>
                        <Link to="/">Privacy Policy</Link>
                    </ul>
                </div>

                <div className="">
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+84 123 123</li>
                        <li>service@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <hr/>
                <p className="py-5 text-sm text-center">
                    Copyright 2024    &copy; All Right Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;