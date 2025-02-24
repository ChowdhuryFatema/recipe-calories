import User from '/images/user.jpg';

const Header = () => {
    return (
        <div className="container mx-auto max-w-[1280px] px-5">
            <div className="navbar bg-base-100 my-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn gap-0 btn-ghost text-2xl hover:bg-transparent font-bold">Recipe &nbsp;<span className='text-red-500 gap-0'>C</span>alories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 *:text-lg">
                        <li><a className="font-semibold duration-500 hover:text-red-500 hover:bg-transparent">Home</a></li>
                        <li><a className="font-semibold duration-500 hover:text-red-500 hover:bg-transparent">Recipes</a></li>
                        <li><a className="font-semibold duration-500 hover:text-red-500 hover:bg-transparent">About</a></li>
                        <li><a className="font-semibold duration-500 hover:text-red-500 hover:bg-transparent">Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <div className="form-control me-3">
                            <label className="hidden input rounded-full md:flex items-center gap-2 bg-[#150B2B0D]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="rounded-full">
                                    <img className='rounded-full ' alt="Tailwind CSS Navbar component" src={User} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;