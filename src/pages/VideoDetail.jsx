import React from 'react';

export default function VideoDetail() {
  return (
    <div>
      <div>
        <img
          className="w-fit h-1/2"
          src="https://derraleves.com/wp-content/uploads/2020/05/the-best-youtube-thumbnails-that.jpg"
          alt=""
        />
      </div>
      <div>
        <h5 className="mx-3 font-bold">Title</h5>
        <div className="text-sm flex flex-row  justify-between mx-2 p-3">
          <div>Views</div>
          <div>Likes</div>
          <div>Dislikes</div>
        </div>
        <hr></hr>
        <div className="grid grid-cols-6 p-3 ">
          <div>
            <img
              className="rounded-full w-1/3 m-2"
              src="https://derraleves.com/wp-content/uploads/2020/05/the-best-youtube-thumbnails-that.jpg"
              alt=""
            />
          </div>
          <div className="col-span-4 m-2">
            <h5>Name</h5>
            <p className="text-sm m-2">678 Subscriber</p>
          </div>
          <div>
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
              className="rounded-full w-1/6 m-2"
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
