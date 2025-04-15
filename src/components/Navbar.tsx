import React from 'react';
        
const Navbar = () => {
    return (
        <>
        <nav className='pb-20'>
            <ul>
                <div className='flex justify-between font-primary'>
                    <div className='flex flex-col items-start text-left'> 
                        <p> Parth Sangani</p>
                        <p> University of Maryland, College Park</p>
                    </div>
                    <li className='font-bold flex flex-row gap-15'>
                        <h3>About</h3>
                        <h3>Projects</h3>
                        <h3>Contact</h3>
                    </li>
                </div>
            </ul>
        </nav>
        </>
    )
};

export default Navbar;