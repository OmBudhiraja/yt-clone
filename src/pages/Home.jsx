import React from 'react';
import Navbar from '../components/Navbar';

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
            <img className='h-40 w-fit border-2 my-2 items-center border-black' src='https://picsum.photos/200/300' alt='img' />
            <div className='flex flex-rows mx-1'>
              <div>
                <img className='rounded-full h-10 w-10 p-2 border-2 border-black' src='https://picsum.photos/200/300' alt='img' />
              </div>
              <div>
                <h3 className='text-xl mx-2 '>Title</h3>
                <p className='text-sm mb-4 mx-2'>Descr</p>
              </div>
            </div>
          </div>
          ))}
        </div>

      </div>

    </div>
  );
}

{/* <div class="grid grid-rows-4 grid-flow-col gap-4">
{myvid.map((item, index) => (
  <div className="col-span-1 border-1 border-yellow-50" key={index}>
    <div className="card">
      <div className="card-body grid grid-col-3">
        <div className="col-span-2">
          <img src="https://picsum.photos/200/300" className='w-full' alt="img" />
        </div>
        <div>
          <h5>Title</h5>
          <p>Description</p>
        </div>
      </div>
    </div>
  </div>
))}
</div>
</div> */}


// concern
// how to fit image to width
