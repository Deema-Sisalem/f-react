import img from './../../images/avataaars.svg';

function Home() {
    return (
        <div className=" bg-pink-300 mx-auto p-4 flex flex-col items-center justify-center content-center scroll-pb-96">
            <img src={img} alt="My Image" className='w-52 pt-5' />
            <h1 className="text-4xl font-bold my-6 text-white">START FRAMEWORK</h1>
            <div className="w-28 h-2  relative">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-white rounded-full"></div>
                <div className="absolute top-0 right-0 w-1/4 h-full bg-white rounded-full"></div>
                <div className="absolute top-0 left-1/4 w-1/4 h-full bg-white rounded-full"></div>
                <div className="absolute top-0 left-2/4 w-1/4 h-full bg-white rounded-full"></div>

            </div>
            <p className=" mt-4 mb-16 text-white">Graphic Artist - Web Designer - Illustrator</p>
            {/* Add decorative text styling here */}
            


        </div>
    );
}

export default Home;
