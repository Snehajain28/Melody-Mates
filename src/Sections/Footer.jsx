import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className=" text-gray-300 flex flex-col w-[87vw] ml-[6vw] sm:ml-[-70px] justify-center mx-auto items-center">
              <div className="flex flex-wrap gap-5 leading-1 mt-10 mx-auto justify-center">
             <Link to={'/'} className="mb-2 lg:mb-0 lg:mr-4 hover:text-gray-200">
                    Home
                </Link>
                <Link to={'/'}  className="mb-2 lg:mb-0 lg:mr-4 hover:text-gray-200">
                    Search
                </Link>
                <Link to={'/'} className="mb-2 lg:mb-0 lg:mr-4 hover:text-gray-200">
                    Your Library
                </Link>
                <Link to={'/'} className="hover:text-gray-200">
                    Premium
                </Link>
            </div>
            <div className="flex  gap-4 ">
                <Link to={'/'} className="mb-2 lg:mb-0 lg:mr-4 hover:text-gray-200">
                    Install App
                </Link>
                <Link to={'/'} className="mb-2 lg:mb-0 lg:mr-4 hover:text-gray-200">
                    Cookies
                </Link>
                <Link to={'/'} className="hover:text-gray-200">
                    Legal
                </Link>
            </div>
        </div>
    )
};



