import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Hero from "../assets/images/Hero.svg";
import Glass from "../assets/images/glass.png";

const Home = () => {
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/user_list.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error loading user data:', error));
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const results = users.filter(user =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.first_name + ' ' + user.last_name).toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Navigate to the SearchResults page with results
      navigate('/search', { state: { searchResults: results } }); 
    }
  };

  return (
    
    <div className="flex flex-col items-start pl-[30%] pt-24 gap-10">
      <div>
        <img className="h-20" src={Hero} alt="hero" />
      </div>

      <div className="flex flex-row items-center px-5 gap-4 bg-white border border-[#D7D7EA] shadow-md shadow-gray-300 rounded-[12px]">
        <div className="magnify-logo">
          <img className="h-4 w-4" src={Glass} alt="glass" />
        </div>

        <div className="search-box">
          <input
            className="w-[450px] h-12 p-2"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
