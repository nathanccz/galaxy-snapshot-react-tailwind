import React from 'react';
import ReactPlayer from 'react-player';

const APODVideo = ({url}) => {
    
    return (
      <div className="aspect-w-16 aspect-h-9 mt-5" id='APOD-Video'>
        <ReactPlayer 
          className="absolute inset-0"
          url={url}
          width="100%"
          height="100%"
          playsInLine={true}
          controls={true}
          playing={true}
        />
      </div>
    );
};

export default APODVideo;