

export default function MobileBar(){
    return(
        <div className="md:hidden flex justify-start items-center px-5 w-full fixed top-0 h-13 bg-white shadow-md border-b border-gray-300">
            <img className="h-10 w-auto" src="https://ug.nsuk.edu.ng/api/global/logo" alt="NSUK LOGO" />
            <h1 className="roboto text-xl ml-10">NSUK Portal</h1>
        </div>
    )

}