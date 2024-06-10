import React from 'react'
import { splashLogo } from '../assets/logos'

const Contacts = () => {
    return (
        <div>
            <div className='w-full items-center flex justify-center mt-10 md:ml-10'>
                <h2 className='w-2/3 md:w-[30%] md:mr-5 mr-2 justify-center flex text-white font-outfit font-bold text-3xl mb-5'>Contact me:</h2>
                <img className='absolute -z-20 w-60 mb-4 ml-3 md:ml-0' src={splashLogo} alt="splash" />
            </div>
            <div>
                <p>Location: Sofia, Bulgaria</p>
                <p>Email: iliev.lyubomir98@gmail.com</p>
            </div>
        </div>
    )
}

export default Contacts
