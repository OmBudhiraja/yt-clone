import React, { useEffect, useRef, useState, useCallback } from 'react';
import { RiPauseMiniLine, RiPlayFill } from 'react-icons/ri';
import videoSrc from './../assets/001 Welcome To The Course.mp4';
import transformTime from '../utils/transformTime';

export default function VideoPlayer() {
  const videoRef = useRef();
  const progressRef = useRef();

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [totalTime, setTotalTime] = useState('0:00');
  const [progessBarShiftValue, setProgessBarShiftValue] = useState('0px');
  const [showVideoControls, setShowVideoControls] = useState(true);

  function tooglePlayPause(action) {
    if (videoRef.current) {
      if (action) {
        if (action === 'play') {
          videoRef.current.play();
          setIsVideoPlaying(true);
          return;
        } else if (action === 'pause') {
          videoRef.current.pause();
          setIsVideoPlaying(false);
          return;
        }
      }
      videoRef.current.paused || videoRef.current.ended
        ? videoRef.current.play()
        : videoRef.current.pause();

      setIsVideoPlaying((prev) => !prev);
    }
  }

  const onTimeUpdate = useCallback(function (e) {
    if (!progressRef.current.getAttribute('max')) {
      progressRef.current.setAttribute('max', videoRef.current.duration);
    }
    setCurrentTime(transformTime(Math.floor(videoRef.current.currentTime)));

    progressRef.current.value = videoRef.current.currentTime;
    const shiftValue = `${
      (videoRef.current.currentTime / videoRef.current.duration) *
        progressRef.current.getBoundingClientRect().width -
      1
    }px`;
    setProgessBarShiftValue(shiftValue);
    progressRef.current.querySelector(
      '#progress-bar'
    ).style.width = `${Math.floor(
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    )}%`;
  }, []);

  const onMetaDataLoaded = useCallback(function () {
    progressRef.current.setAttribute('max', videoRef.current.duration);
    setTotalTime(transformTime(Math.floor(videoRef.current.duration)));
  }, []);

  const onKeyPress = useCallback(function (e) {
    console.log(e);
    switch (e.keyCode) {
      case 32:
        tooglePlayPause();
        break;
      case 107:
        tooglePlayPause();
        break;
      default:
        break;
    }
  }, []);

  const onWindowResize = useCallback(function (e) {
    const shiftValue = `${
      (videoRef.current.currentTime / videoRef.current.duration) *
        progressRef.current.getBoundingClientRect().width -
      1
    }px`;
    setProgessBarShiftValue(shiftValue);
  }, []);

  function onProgresBarClicked(e) {
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.pageX - rect.left) / progressRef.current.offsetWidth;
    videoRef.current.currentTime = pos * videoRef.current.duration;
    tooglePlayPause('play');
    console.log(rect, e.pageX, pos);
  }

  useEffect(() => {
    let videoRefValue;
    if (videoRef.current) {
      videoRefValue = videoRef.current;
      setIsVideoPlaying(!videoRef.current.paused);
      videoRefValue.addEventListener('timeupdate', onTimeUpdate);
      videoRefValue.addEventListener('loadedmetadata', onMetaDataLoaded);
      window.addEventListener('keypress', onKeyPress);
      window.addEventListener('resize', onWindowResize);
    }
    return () => {
      videoRefValue?.removeEventListener('timeupdate', onTimeUpdate);
      videoRefValue?.removeEventListener('loadedmetadata', onMetaDataLoaded);
      window.removeEventListener('keypress', onKeyPress);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [onKeyPress, onMetaDataLoaded, onTimeUpdate, onWindowResize]);

  useEffect(() => {
    videoRef.current && setShowVideoControls(videoRef.current.paused);
  }, [videoRef.current?.paused]);

  return (
    <figure className="relative h-[38rem] w-[70vw] bg-black group">
      <video
        ref={videoRef}
        src={videoSrc}
        // autoPlay
        className="w-full h-full"
      ></video>

      <div
        id="controls"
        className={`absolute bottom-0 left-0 w-full px-3 py-1 opacity-0 group-hover:opacity-100 ${
          showVideoControls ? 'block' : ''
        }`}
        {...(showVideoControls ? { style: { opacity: 1 } } : {})}
      >
        <div id="progress" className="relative h-2 mb-1">
          <progress
            ref={progressRef}
            min={0}
            value={0}
            onClick={onProgresBarClicked}
            className={`w-full h-1 hover:h-[6px] cursor-pointer absolute top-1/2 -translate-y-1/2 left-0 peer`}
          >
            <span id="progress-bar" className="h-full bg-red-600 "></span>
          </progress>
          <div
            id="circle"
            className=" absolute h-3 w-3 rounded-full bg-red-600 top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden peer-hover:block"
            style={{
              transform: `translate(${progessBarShiftValue}, -50%)`,
            }}
          ></div>
        </div>
        <div id="buttons" className="flex items-center justify-between">
          <section className="flex items-center gap-5">
            <div
              onClick={tooglePlayPause}
              className="cursor-pointer rounded-full transition-colors p-2 hover:bg-gray-500 hover:bg-opacity-20"
            >
              {!isVideoPlaying ? (
                <RiPlayFill color="white" size={35} />
              ) : (
                <RiPauseMiniLine color="white" size={35} />
              )}
            </div>
            <div className="select-none text-base font-extralight">
              <span>{currentTime}</span>
              <span> / </span>
              <span>{totalTime}</span>
            </div>
          </section>
        </div>
      </div>
    </figure>
  );
}

/* <div>
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
    </div> */
