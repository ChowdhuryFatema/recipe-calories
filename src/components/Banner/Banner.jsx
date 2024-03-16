

const Banner = () => {
    return (
        <div className="container mx-auto max-w-[1180px] px-5">
            <div className="hero py-12 md:py-20 lg:py-24 bg-no-repeat bg-cover bg-center rounded-2xl">
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full md:w-4/5 lg:w-2/3 space-y-8">
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[40px] md:leading-[50px] lg:leading-[65px]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Embark on a culinary journey like no other with our bespoke cooking classes, curated just for you, to refine your skills and tantalize your taste buds. Experience the joy of creating delectable dishes in a personalized setting tailored to your preferences.</p>

                        <button className="btn bg-red-500 mr-2 md:mr-5 hover:bg-red-600 px-5 text-white  text-sm md:text-lg rounded-full border-0 duration-500">Explore Now</button>

                        <button className="btn bg-transparent hover:bg-red-500 hover:border-red-500 px-5 text-white text-sm md:text-lg rounded-full duration-500">Our Feedback</button>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;