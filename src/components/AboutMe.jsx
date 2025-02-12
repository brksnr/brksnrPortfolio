export function AboutMe(){
    const handleScroll = (e) => {
        e.preventDefault();
    
        const targetElement = document.getElementById('form');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
    return (
        <>
            <div id="about" className="flex flex-col items-center justify-center  text-black gap-30 py-30 about">
                    <div className="flex flex-col items-center justify-center gap-10 mx-5">
                        <div>
                            <h1 className="font-bold text-5xl">ABOUT ME</h1>
                        </div>
                        <div className=" w-20 h-2 button-color rounded"></div>
                        <div className="text-center flex descripton-color font-medium leading-loose">
                            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of<br/> programming and technology</p>
                        </div>
                    </div>
                    <div className="flex gap-30 flex-col xl:flex-row mx-5  md:mx-70">
                            <div className="flex flex-col gap-10"> 
                                <h3 className="font-bold text-4xl">Get to know me!</h3> 
                                <div className="flex flex-col gap-10 justify-center max-w-150">
                                    <p className="descripton-color font-xl">I’m a <span className="font-bold">Full Stack Web Developer</span> with a passion for creating and maintaining the front-end of websites and web applications. I focus on delivering intuitive and user-friendly experiences that contribute to the overall success of the product. Feel free to check out some of <span className="font-bold">my projects!</span></p>
                                    <p className="descripton-color font-xl">I enjoy sharing what I’ve learned in <span className="font-bold">web development</span>, hoping it helps others in the developer community. You can connect with me on 
                                    <a 
                                    href="https://www.linkedin.com/in/berksener/"
                                     target="_blank" rel="noopener noreferrer" 
                                     className="text-sky-700 font-bold"> LinkedIn </a>or  
                                    <a 
                                    href="mailto:berksener04@gmail.com" 
                                    className="text-sky-700 font-bold"> Mail </a> where I share insights and content related to web development and programming.</p>
                                    <p className="descripton-color font-xl">I’m always open to <span className="font-bold">job</span> opportunities where I can contribute, learn, and grow. If you think my skills and experience would be a good match for your team, don’t hesitate to <span className="font-bold">reach out!</span></p>
                                </div>
                                <button onClick={handleScroll} className="rounded-md w-52 h-12 button-color transition transform hover:-translate-y-2 duration-300">
                                <a href="#form" className="font-bold">CONTACT</a>
                                </button>
                            </div>
                            <div className="flex flex-col gap-10">
                                <h3 className="font-bold text-4xl">My Skills</h3>
                                <div className="flex flex-wrap gap-4 max-w-150">
                                    <button className="rounded-md w-24 h-10 skill-color font-semibold">HTML</button>
                                    <button className="rounded-md w-24 h-10 skill-color font-semibold">SQL</button>
                                    <button className="rounded-md w-24 h-10 skill-color font-semibold">CSS</button>
                                    <button className="rounded-md w-24 h-10 skill-color font-semibold">JAVA</button>
                                    <button className="rounded-md w-30 h-10 skill-color font-semibold">JavaScript</button>
                                    <button className="rounded-md w-24 h-10 skill-color font-semibold">React</button>
                                    <button className="rounded-md w-24 h-10 skill-color font-semibold">GIT</button>
                                    <button className="rounded-md w-24 h-10 skill-color font-semibold">Tailwind</button>
                                    <button className="rounded-md w-30 h-10 skill-color font-semibold">SpringBoot</button>
                                    <button className="rounded-md w-45 h-10 skill-color font-semibold">Responsive Design</button>
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )
}