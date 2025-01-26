export function Projects(){
    return(
        <>
        <div id="projects" className="flex flex-col items-center justify-center  text-black gap-30 my-20 ">
            <div className="flex flex-col items-center mx-5  gap-10 ">
                        <div>
                            <h1 className="font-bold text-5xl">PROJECTS</h1>
                        </div>
                        <div className=" w-20 h-2 button-color rounded"></div>
                        <div className="text-center flex descripton-color font-medium leading-loose">
                            <p>Here you will find some of the personal projects that I created with<br/> each project containing its own case study</p>
                        </div>
             </div>

             <div className="flex flex-col md:items-center xl:flex-row mx-5 gap-10 xl:gap-35">
                <div className="">
                    <img src="images/project1.png" className="md:min-w-150"></img>
                </div>
                <div className="flex flex-col gap-10 items-center xl:items-baseline flex-wrap">
                    <h1 className="font-bold text-3xl">E-Commerce</h1>
                    <p className="descripton-color font-xl  xl:max-w-100">Created a fully functional e-commerce platform, BerkStore, showcasing a wide range of products with a user-friendly design. The website integrates smooth navigation, a secure shopping cart, and a seamless checkout process, offering customers a modern and reliable online shopping experience. Built with the latest web technologies, BerkStore ensures fast performance and responsiveness across devices.</p>
                    <button className=" rounded-md w-52 h-12 button-color transition transform hover:-translate-y-2 duration-300">
                        <a href="https://berkstore.vercel.app/"  target="_blank" rel="noopener noreferrer">Go To Project</a>
                    </button>
                </div>
             </div>
        </div>
        </>
    )
}