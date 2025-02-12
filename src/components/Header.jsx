import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    const handleAbout = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('about');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
      const handleHome = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('home');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

      const handleProject = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('projects');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

      const handleContact = (e) => {
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
            <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="flex justify-around items-center py-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="images/me.jpg"
                            className="w-12 h-12 rounded-full"
                        />
                        <button 
                        onClick={handleContact} href="#form" 
                        className="hover-text font-bold header-menu">
                            BERK SENER
                        </button>
                    </div>
                <div className="sdadsa flex flex-col items-end">
                <div className="md:hidden" onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                
                    <div className={`hidden md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex space-x-4 text-space gap-10">
                            <li>
                                <a onClick={handleHome} href="#home" className="hover-text font-bold header-menu">HOME</a>
                            </li>
                            <li>
                                <a onClick={handleAbout} href="#about" className="hover-text font-bold header-menu">ABOUT</a>
                            </li>
                            <li>
                                <a onClick={handleProject} href="#projects" className="hover-text font-bold header-menu">PROJECTS</a>
                            </li>
                            <li>
                                <a onClick={handleContact} href="#form" className="hover-text font-bold header-menu">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} `}>
            <ul className="flex flex-col space-y-4 text-space gap-10 items-end mr-5 mb-5 ">
              <li>
                <a onClick={handleHome} href="#home" className="hover-text font-bold header-menu">HOME</a>
              </li>
              <li>
                <a onClick={handleAbout} href="#about" className="hover-text font-bold header-menu">ABOUT</a>
              </li>
              <li>
                <a onClick={handleProject} href="#projects" className="hover-text font-bold header-menu">PROJECTS</a>
              </li>
              <li>
                <a onClick={handleContact} href="#form" className="hover-text font-bold header-menu">CONTACT</a>
              </li>
            </ul>
          </div>
            </div>
        </>
    );
}
