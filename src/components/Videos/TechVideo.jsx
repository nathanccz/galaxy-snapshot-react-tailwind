import React from 'react';
import ReactPlayer from 'react-player';

const TechVideo = () => {
  return (
    <div className="aspect-w-16 aspect-h-9 my-5">
      <ReactPlayer 
        className="absolute inset-0"
        url='https://www.youtube.com/watch?v=WeA7edXsU40'
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        playsInLine={true}
        controls={false}
        loop={true}
      />
    </div>
  );
};

export default TechVideo;