import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const myvid = Array(10).fill('');
  return (
    <div>
      <Navbar />
      <div className="container">
        <div class="grid grid-rows-4 grid-flow-col gap-4">
          {myvid.map((item, index) => (
            <div className="col-span-1" key={index}>
              <div className="card">
                <div className="card-body grid grid-col-3">
                  <div className="col-span-2">
                    <img src="https://picsum.photos/200/300" alt="img" />
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
      </div>
    </div>
  );
}
