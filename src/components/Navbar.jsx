import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch, BsArrowLeft } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { RiVideoUploadFill, RiVideoUploadLine } from 'react-icons/ri';
import { ReactComponent as Logo } from './../assets/logo.svg';

export default function Navbar() {
  const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const [isUploadLinkActive, setIsUploadLinkActive] = useState(true);
  const [showSearchBarOnFullNav, setShowSearchBarOnFullNav] = useState(false);

  const onSearch = () => {
    console.log(search);
    // vall api
  };

  const user = null;

  return (
    <div className="sticky top-0 z-10">
      <nav className="flex justify-between gap-8 items-center bg-zinc-800 bg-opacity-95 px-4 sm:px-12 py-3 border-b border-zinc-500 min-h-[69px]">
        {showSearchBarOnFullNav ? (
          <>
            <BsArrowLeft
              size={24}
              color="white"
              onClick={() => setShowSearchBarOnFullNav(false)}
            />
            <NavSearchBar autoFocusInput={true} />
          </>
        ) : (
          <>
            <div>
              <Link to={'/'}>
                <Logo className="h-[22px] sm:h-6" />
              </Link>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center">
              <NavSearchBar
                search={search}
                setSearch={setSearch}
                onSearch={onSearch}
              />
            </div>
            <div className="flex items-center gap-5 sm:gap-8">
              <div
                className="block md:hidden cursor-pointer"
                onClick={() => setShowSearchBarOnFullNav(true)}
              >
                <BsSearch className="h-5 w-5 sm:h-6 sm:w-6" color="white" />
              </div>
              {user ? (
                <>
                  <NavLink
                    to={'/upload'}
                    className={({ isActive }) => {
                      setIsUploadLinkActive(isActive);
                      return '';
                    }}
                  >
                    {isUploadLinkActive ? (
                      <RiVideoUploadFill
                        className="h-6 w-6 sm:h-7 sm:w-7"
                        color="white"
                      />
                    ) : (
                      <RiVideoUploadLine
                        className="h-6 w-6 sm:h-7 sm:w-7"
                        color="white"
                      />
                    )}
                  </NavLink>
                  <div>
                    <img
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                      alt=""
                      className="rounded-full h-9 w-9 sm:h-11 sm:w-11"
                    />
                  </div>
                </>
              ) : (
                <>
                  <Link to={'/login'}>
                    <button className="border border-blue-400 text-blue-400 flex items-center gap-2 py-2 px-4 uppercase font-semibold">
                      <BiUserCircle size={26} />
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

const NavSearchBar = ({ onSearch, search, setSearch, autoFocusInput }) => {
  return (
    <form className="flex w-full items-center justify-center text-white rounded max-w-[32rem]">
      <input
        onSubmit={onSearch}
        type="text"
        placeholder="Search"
        autoFocus={!!autoFocusInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-zinc-900 border-none outline-1 outline outline-transparent px-3 py-[10px] flex-1 placeholder-gray-00 focus:outline-blue-400"
      />
      <button className="border-none outline-none py-[10px] px-6 bg-zinc-700">
        <BsSearch size={20} color="white" />
      </button>
    </form>
  );
};
