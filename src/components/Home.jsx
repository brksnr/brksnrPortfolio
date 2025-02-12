export function Home() {
    const handleScroll = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('projects');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
    return (
        <>
        <div id="home" className="bg-[url(/images/arkaplan.png)] h-screen">
                <div className="flex flex-col items-center justify-center h-full text-black gap-10 mx-5">
                    <h1 className="text-3xl font-extrabold sm:tracking-widest sm:text-4xl md:text-5xl xl:text-6xl">HEY, I'M BERK SENER</h1>
                    <div>
                        <p className="text-center header-menu font-semibold leading-loose">
                        A passionate Full Stack Developer focusing on creating impactful web applications and solutions across both front-end and back-end.
                        </p>
                    </div>
                    <div>
                        <button onClick={handleScroll} className="rounded-md w-52 h-12 button-color transition transform hover:-translate-y-2 duration-300">
                         
                            <a href="#projects" className="font-bold">PROJECTS</a>
                        </button>
                    </div>
                </div>
        </div>
        </>
    )
}