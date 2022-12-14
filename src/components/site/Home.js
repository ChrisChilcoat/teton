import React from "react";
import { NavLink } from 'react-router-dom';
import mountainImage from '../../images/mountain.jpg'

export default function SiteHeader() {
  return (
	  <div className="bg-gray-800">
	    <div className="lg:flex flex-wrap content-center h-screen col-span-12 p-10">
	      <div className="text-left">
	        <h1 className="text-5xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-purple-900 to-blue-400">
	          <span className="block xl:inline">Teton</span>
	          <span className="block xl:inline"> Dashboard</span>
	        </h1>
	        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl ">
					A Front-End Framework, Built with React and Tailwind CSS and is Still Cooking in the Development Oven.	        </p>
	        <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
	          <div className="rounded-full">
	            <NavLink
	              to='/layout/grid'
	              className="flex items-center justify-center w-full px-8 py-3 font-medium text-white bg-purple-900 border border-transparent rounded-full shadow hover:opacity-90 md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60"
	            >
	              View Components
	            </NavLink>
	          </div>
	          <div className="mt-3 sm:mt-0 sm:ml-3">
	            <a
	              href='https://github.com/ChrisChilcoat/teton' 
	              className="flex items-center justify-center w-full px-8 py-3 font-medium text-blue-900 bg-white border-2 border-transparent border-blue-900 rounded-full hover:opacity-80 md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60"
	            >
	              Clone on GitHub
	            </a>
	          </div>
	        </div>
	      </div>
	      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-6 lg:mt-0">
	        <img
	          className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
	          src={mountainImage}
	          alt=""
	        />
	      </div>
	    </div>
    </div>
  )
}