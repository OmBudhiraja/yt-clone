import React from 'react';

export default function VideoDetail() {
  return (
    <div>
      <div className='mx-3' style={{height:'10%' , width: "90%"}}>
        <img
          className="h-1/2"
          src="https://derraleves.com/wp-content/uploads/2020/05/the-best-youtube-thumbnails-that.jpg"
          alt=""
        />
      </div>
      <div>
        <h5 className="mx-3 mt-3 font-bold">Title</h5>
        <div className="text-sm flex flex-row  justify-between mx-2 p-3">
          <div>Views</div>
          <div>Likes</div>
          <div>Dislikes</div>
        </div>
        <hr></hr>
        <div className="flex flex-row  justify-between p-3 ">
          <div>
            <img
              className="rounded-full w-10  h-10 m-2"
              src="https://derraleves.com/wp-content/uploads/2020/05/the-best-youtube-thumbnails-that.jpg"
              alt=""
            />
          </div>
          <div className="m-2">
            <h5 className='mx-2'>Name</h5>
            <p className="text-sm mx-2 my-1">678 Subscriber</p>
          </div>
          <div className='mx-3'>
            <button
              type="submit"
              className="bg-purple-800 text-white px-4 py-2 rounded-full"
            >
              Subscribe
            </button>
          </div>
        </div>
        <hr></hr>
        <h2 className="font-bold">COmments</h2>
        <div className="comment grid grid-cols-6 p-3 border-2 border-black">
          <div>
            <img
              className="rounded-full h-5 w-5 m-2"
              src="https://derraleves.com/wp-content/uploads/2020/05/the-best-youtube-thumbnails-that.jpg"
              alt=""
            />
          </div>
          <div className="col-span-5">
            <h5>Name</h5>
            <p>Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}


// hwo to have fixed image framew
