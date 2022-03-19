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
      <nav className="bg-grey-800  grid grid-col-8">
        <div className="item-center">Icon</div>
        <div className="col-span-6 bg-dark">
          <input
            onSubmit={onSearch}
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-800 text-white"
          />
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
