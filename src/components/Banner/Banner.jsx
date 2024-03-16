

const Banner = () => {
    return (
        <div className="container mx-auto max-w-[1180px] px-5">
            <div className="hero py-12 md:py-20 lg:py-24 bg-no-repeat bg-cover bg-center bg-[linear-gradient(45deg,rgba(17,17,17,0.50),rgba(17,17,17,0.50)),url(./images/chef-cooking1.jpg)] rounded-2xl" >
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full md:w-4/5 lg:w-2/3 space-y-8">
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[40px] md:leading-[50px] lg:leading-[65px]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

                        <button className="btn bg-red-500 mr-2 md:mr-5 hover:bg-red-600 px-5 text-white  text-sm md:text-lg rounded-full border-0">Explore Now</button>

                        <button className="btn bg-transparent hover:bg-red-500 hover:border-red-500 px-5 text-white text-sm md:text-lg rounded-full">Our Feedback</button>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;