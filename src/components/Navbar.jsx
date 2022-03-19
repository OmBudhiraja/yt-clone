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
        <div className="col-span-5 flex-rows items-center bg-dark">
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
          {/* <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
            className="rounded-full h-16 w-16"
          /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<rect x="2" y="5" width="14" height="14" rx="2"></rect><path d="M16,10l4.55-2.28a1,1,0,0,1,1.45.9v6.76a1,1,0,0,1-1.45.9L16,14" stroke-linecap="round"></path></svg>
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
