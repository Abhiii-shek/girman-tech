import React from 'react';
import { useLocation } from 'react-router-dom';

import Anjali from "../assets/images/anjali.jpg"

const SearchResults = () => {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] }; 
  return (
    <div className='flex left-6 ml-56'>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-4">
  {searchResults.length > 0 ? (
    searchResults.map((user) => (
      <div key={user.id} className="border  p-2 rounded-lg bg-white flex flex-col ">
        {/* Profile Picture */}
        <img
          src={Anjali} // Placeholder image URL
          alt="Profile"
          className="rounded-full w-20 h-20 mb-4"
        />

        {/* Name */}
        <p className="text-lg font-semibold">{user.first_name} {user.last_name}</p>
        
        {/* Location */}
        <p className="text-gray-500">{user.city}</p>

        {/* Phone number and button in a row */}
        <div className="flex justify-between items-center  mt-2">
          <p className="text-gray-700"><strong>Contact:</strong> {user.contact_number}</p>
          <button
            className="ml-4 bg-black text-white py-1 px-3 rounded"
            onClick={() => handleFetchDetails(user)}
          >
            Fetch Details
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">No results found</p>
  )}
</div>
    </div>
  );
};

export default SearchResults;
