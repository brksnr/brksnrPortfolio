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
                {/* PROJECTS */}
             <div className="flex flex-col md:items-center xl:flex-row mx-5 gap-10">
                <div className="">
                    <img src="images/project1.png" className="md:min-w-80 w-200 "></img>
                </div>
                <div className="flex flex-col gap-10 items-center xl:items-baseline flex-wrap">
                    <h1 className="font-bold text-3xl">E-Commerce</h1>
                    <p className="descripton-color font-xl  xl:max-w-150">Created a fully functional e-commerce platform, BerkStore, showcasing a wide range of products with a user-friendly design. The website integrates smooth navigation, a secure shopping cart, and a seamless checkout process, offering customers a modern and reliable online shopping experience. Built with the latest web technologies, BerkStore ensures fast performance and responsiveness across devices.</p>
                    <button className=" rounded-md w-52 h-12 button-color transition transform hover:-translate-y-2 duration-300">
                        <a href="https://berkstore.vercel.app/"  target="_blank" rel="noopener noreferrer">Go To Project</a>
                    </button>
                </div>
             </div>

             <div className="flex flex-col md:items-center xl:flex-row mx-5 gap-10">
                <div className="">
                    <img src="images/project2.png" className="md:min-w-80 w-200 "></img>
                </div>
                <div className="flex flex-col gap-10 items-center xl:items-baseline flex-wrap">
                    <h1 className="font-bold text-3xl">Movie-B</h1>
                    <p className="descripton-color font-xl  xl:max-w-150">
                    I developed Movie-B, a full-stack movie platform with a React-based frontend and a Spring Boot backend. The frontend, built with React (Vite), Tailwind CSS, and Axios, provides a dynamic and responsive user experience, while the backend, powered by Spring Boot, PostgreSQL, and Spring Security, handles authentication, data management, and secure API communication. The platform allows users to browse movies, manage their accounts, and interact with content seamlessly.                        </p>
                    <button className=" rounded-md w-52 h-12 button-color transition transform hover:-translate-y-2 duration-300">
                        <a href="https://www.linkedin.com/in/berksener/details/projects/"  target="_blank" rel="noopener noreferrer">Go To Project</a>
                    </button>
                </div>
             </div>

             <div className="flex flex-col md:items-center xl:flex-row mx-5 gap-10">
                <div className="">
                    <img src="images/project3.png" className="md:min-w-80 w-200 "></img>
                </div>
                <div className="flex flex-col gap-10 items-center xl:items-baseline flex-wrap">
                    <h1 className="font-bold text-3xl">Twitter</h1>
                    <p className="descripton-color font-xl  xl:max-w-150">
                    I developed a full-stack Twitter clone with a React-based frontend and a Spring Boot backend. The frontend, built with React (Vite), Tailwind CSS, and Axios, ensures a dynamic and responsive user experience, while the backend, powered by Spring Boot, PostgreSQL, and Spring Security, handles authentication, data management, and secure API communication. The platform enables users to post tweets, like, comment, and interact in real time, replicating the core functionalities of Twitter.                        </p>
                    <button className=" rounded-md w-52 h-12 button-color transition transform hover:-translate-y-2 duration-300">
                        <a href="https://www.linkedin.com/in/berksener/details/projects/"  target="_blank" rel="noopener noreferrer">Go To Project</a>
                    </button>
                </div>
             </div>
        </div>
        </>
    )
}