

const Footer = () => {
    return (    
        <>
        <footer className="rounded-lg shadow-2xl mt-30 p-4">
            <div className="md:flex md:items-center md:justify-between align-bottom">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Parth Sangani™</a>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#hero" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#project-showcase" className="hover:underline me-4 md:me-6">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
            </footer>
            </>
        )

}

export default Footer