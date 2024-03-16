import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter  } from "react-icons/fa";


const Footer = () => {
    return (
        
        <footer className="bg-[#121212] py-10 lg:py-16 px-5 text-center mt-14 md:mt-24">
            <div className="flex flex-col justify-center items-center space-y-5 md:space-y-8">
              <h2 className="text-white text-3xl">
              Recipe Calories
              </h2>
              <ul className="*:inline-block space-x-8 font-thin opacity-80 text-white space-y-2">
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Shop</a></li>
                <li><a>All Fruits</a></li>
              </ul>
              <div className="*:inline-block *:size-8 space-x-4">
                <FaTwitter className="text-white"/>
                <FaFacebook className="text-white bg-blue-700 rounded-full"/>
                <FaInstagram className="text-white"/>
                <FaLinkedinIn className="text-white" />
              </div>
            </div>
        </footer>



    );
};

export default Footer;