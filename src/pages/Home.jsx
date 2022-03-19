import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'

export default function Home() {
  const myvid = Array(10).fill('');
  return (
    <div>
      <Navbar />
      <div className="container card ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {
          myvid.map((item, index) => (
          <div className='bg-black text-white'>
            <Link to = {"/vid1"} style={{ textDecoration: 'none' }}> 
            <img className=' border-2 my-2 items-center border-black' src='https://picsum.photos/200/300' alt='img' style={{width: '200rem', height: "10rem"}} />
            <div className='flex flex-rows mx-1'>
              <div>
                <img className='rounded-full h-10 w-10 p-2 border-2 border-black' src='https://picsum.photos/200/300' alt='img' />
              </div>
              <div>
                <h3 className='text-xl mx-1'>How I cracked Code</h3>
                <p className='text-sm mx-2'>Descr</p>
                <p className='text-sm mb-4 mx-2'>Views</p>
              </div>
            </div>
          </Link>
          </div>
          ))}
        </div>

      </div>

    </div>
  );
}



// concern
// how to fit image to width


// to-do
// 1. widen search bar length
// 2. center the image
