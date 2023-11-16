import React, {useState, useEffect} from 'react';

import videoImg from '../img/intro/video.jpg';
import play from '../img/intro/play.svg';
import video from '../videos/video.mp4';
import bg from '../img/intro/bg.svg'

export function Intro() {
  const [videoModal, setVideoModal] = useState(false);

  useEffect(() => {
  }, [])

  function openVideoModal() {
    setVideoModal(true);
  }

  function closeVideoModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!(event.target as HTMLElement).closest('.content')) {
      setVideoModal(false);
    }
  }

  return (
    <div data-aos="fade-up" className="md:pt-[160px] pt-[100px]">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-[60px] text-center">
          <h1 className="title md:text-5xl text-4xl mb-4">Landing template for startups</h1>
          <p className="text-xl mb-8">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
          <div className="md:mx-w-xs mx-auto md:flex justify-center block">
            <button className="block max-[768px]:w-full max-[768px]:mb-2 max-[768px]:mx-auto max-w-xs text-white bg-[#5d5dff] hover:bg-[#4242af] rounded px-8 py-3 mr-3 transition duration-200" type="submit">Start free trial</button>
            <button className="block max-[768px]:w-full max-[768px]:mx-auto max-w-xs text-[#C5D2DC] bg-[#33363A] hover:bg-[#2d2f31] rounded py-3 px-8 transition duration-200" type="submit">Learn more</button>
          </div>
        </div>
        <div className='relative flex justify-center items-center'>
          <img loading='lazy' src={videoImg} width={1024} height={576} alt="" />
          <button 
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80'
            onClick={openVideoModal}
          >
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={play} alt="play" />
          </button>
          <img className='absolute -z-10 -bottom-16 -left-16' src={bg} alt="background" />
        </div>

        {videoModal && <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => closeVideoModal(e)} className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/60'>
          <video className='content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' width={840} height={560} autoPlay muted controls src={video} loop></video>
        </div>}
      </div>
    </div>
  );
}