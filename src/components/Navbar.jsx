import React, { useState } from 'react';

export default function Navbar() {
  const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const onSearch = () => {
    console.log(search);
    // vall api
  };
  return (
    <div>
      <nav className="grid grid-cols-8 items-center bg-black">
      <div>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
            className="rounded-full h-16 w-16"
          />
        </div>
        <div className="col-span-6 flex-rows items-center bg-dark">
          <input
        
            onSubmit={onSearch}
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white h-8 items-center p-5 w-fit  mx-3"
          />
          <button type='submit' className='bg-slate-500 p-2 rounded-xl' onClick={onSearch}>Search</button>

        </div>
        <div>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
            className="rounded-full h-16 w-16"
          />
        </div>
      </nav>
    </div>
  );
}
