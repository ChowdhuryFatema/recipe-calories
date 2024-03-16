

const Banner = () => {
    return (
        <div className="container mx-auto max-w-[1180px] px-5">
            <div className="hero py-12 md:py-20 lg:py-24 bg-no-repeat bg-cover bg-center rounded-2xl">
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full md:w-4/5 lg:w-2/3 space-y-5">
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[30px] md:leading-[50px] lg:leading-[65px]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="pb-5">
                        Experience the art of cooking like never before with our customized classes, crafted to cater to your unique preferences and elevate your culinary expertise.</p>

                        <button className="btn bg-red-500 mr-2 md:mr-5 hover:bg-red-600 px-5 text-white  text-sm md:text-lg rounded-full border-0 duration-500">Explore Now</button>

                        <button className="btn bg-transparent hover:bg-red-500 hover:border-red-500 px-5 text-white text-sm md:text-lg rounded-full duration-500">Our Feedback</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;