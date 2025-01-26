export function SideBar(){
    return(
        <>
        <div className="hidden xl:flex fixed top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-lg rounded-r-lg py-5">
      <ul className="space-y-4 p-2 flex flex-col ">
        <li>
          <a href="https://www.linkedin.com/in/berksener/"  target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/brksnr" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-800">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
        </>
    )
}