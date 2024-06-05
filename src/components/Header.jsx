import React from 'react'

const Header = () => {
    return (
        <div className='w-full bg-green-400'>
            <h1 className='font-bold text-4xl'>Header</h1>
            <div>
                <ul>
                    <li className=' text-2xl font-black'>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
