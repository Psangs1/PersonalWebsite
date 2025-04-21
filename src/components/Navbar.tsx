import { HashLink } from 'react-router-hash-link';

        
const Navbar = () => {
    return (
        <>
        <nav className='hidden md:block pb-20'>
            <ul>
                <div className='flex justify-between font-primary sm:text-balance'>
                    <div className='flex flex-col md:items-start md:text-left text-center items-center'> 
                        <p> Parth Sangani</p>
                        <p> University of Maryland, College Park</p>
                    </div>
                    <div className='font-bold flex flex-row gap-15' id='navbar-default'>
                        <HashLink smooth to="/#hero">
                            <li>About</li>
                        </HashLink>
                        <HashLink smooth to="/#project-showcase">
                            <li>Projects</li>
                        </HashLink>
                        <HashLink smooth to="/#contact">
                            <li>Contact</li>
                        </HashLink>
                    </div>
                </div>
            </ul>
        </nav>
        </>
    )
};

export default Navbar;