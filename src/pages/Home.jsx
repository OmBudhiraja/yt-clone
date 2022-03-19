import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const myvid = Array(40).fill({
    title:
      'Test Title Title TitleTitle Title Title Title Title Title Title Name title anaem title name tiele',
    chanelName: 'Test chanell name that is too big to fit in one line',
    time: new Date().toDateString(),
    videoThumbnail: 'https://picsum.photos/300/200',
    views: '2k',
    chanelThumbnail: 'https://picsum.photos/300/200',
  });
  return (
    <div className="min-h-screen bg-zinc-900 text-white w-full">
      <Navbar />
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-0 sm:px-5 md:px-12 py-12 gap-x-5 gap-y-10">
          {myvid.map((item, index) => (
            <div
              className="w-full flex items-center justify-center"
              key={index}
            >
              <div className="w-full max-w-[25rem]">
                <section className="h-48 w-full bg-gray-400 relative">
                  <img
                    className="w-full h-full bg-cover"
                    // className="h-40 w-fit border-2 my-2 items-center border-black"
                    src={item.videoThumbnail}
                    alt="img"
                  />
                  <div className="absolute text-white bg-black bottom-3 right-3 py-[2px] px-1 text-sm rounded-sm">
                    2:40
                  </div>
                </section>
                <section className="flex items-start justify-start gap-3 mb-4 mt-2 mr-5 ml-2 sm:ml-0">
                  <div>
                    <img
                      className="rounded-full h-10 w-10"
                      src="https://picsum.photos/200/200"
                      alt="img"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[1.1rem] leading-6 font-medium overflow-hidden line-clamp-2 text-ellipsis whitespace-normal">
                      {item.title}
                    </p>
                    <p className="text-[0.9rem] text-[#aaa] mt-2 overflow-hidden line-clamp-1 text-ellipsis whitespace-normal">
                      {item.chanelName}
                    </p>
                    <div className="flex items-center gap-2 text-[#aaa]">
                      <p className="text-[0.9rem]">{item.views} views</p>
                      <div className="w-1 h-1 rounded-full bg-[#aaa]"></div>
                      <p className="text-[0.9rem]">{item.time}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
