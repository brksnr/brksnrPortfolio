export function Footer(){
    return (
        <>
        <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
          <div className="max-w-260">
            <h1 className="text-xl font-extrabold tracking-widest md:text-3xl leading-loose ">Berk Sener</h1>
            <p className="font-xl leading-loose ">
            I am a Full Stack Developer passionate about creating web applications, focusing on both front-end and back-end development.
             My goal is to continue learning and improving my skills in modern web technologies while contributing to meaningful and user-friendly projects.
              I'm eager to collaborate on challenging tasks and grow in the field of web development. 
            Feel free to connect with me on LinkedIn, where I share useful content and insights related to web development.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase">Social</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/berksener/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/brksnr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>


        <hr className="border-gray-700 my-6" />
        <div className="text-center text-gray-500 text-sm">
          © Copyright 2025 . Made by{" "}
          <a href="#" className="text-white hover:underline">
            Berk Sener
          </a>
        </div>
      </div>
    </footer>
        </>
    )
}