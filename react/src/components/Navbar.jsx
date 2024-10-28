import React from 'react';
import Logo from "../assets/images/Logo.png"; 
import { Link } from 'react-router-dom';
import SearchResults from './SearchResult';

const Navbar = () => {
    return (
        <div className="flex p-2 pl-32 items-center gap-96 bg-white top-0 shadow-md">
            {/* Logo Section */}
            <div className='flex justify-center items-center gap-[12.65px]'>
                <Link to="/">
                <img className="h-12" src={Logo} alt="logo" />
                
                </Link>
            </div>

            {/* Links Section */}
          

<ul className="flex items-center gap-[42.17px] text-black cursor-pointer">
  {/* Internal link to Home/Search page */}
  <li className="font-bold text-[18.49px] leading-[27px] underline text-[#3063E6]">
    <Link to="/">Search</Link>
  </li>
  
  {/* External link to website */}
  <li className="font-normal text-[18.49px] leading-[27px] text-[#111111]">
    <a href="http://girmantech.com/" target="_blank" rel="noopener noreferrer">Website</a>
  </li>
  
  {/* External link to LinkedIn */}
  <li className="font-normal text-[18.49px] leading-[27px] text-[#111111]">
    <a href="https://www.linkedin.com/company/girmantech/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </li>
  
  {/* Email link */}
  <li className="font-normal text-[18.49px] leading-[27px] text-[#111111]">
    <a href="mailto:contact@girmantech.com.">Contact</a>
  </li>
</ul>

        </div>
    );
}

export default Navbar;
