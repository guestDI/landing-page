import React from 'react';
import YouTube from 'react-youtube';

const youtube = () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0
        }
    };


    return (
        <YouTube
            videoId="50_Ala5BKBo"
            opts={opts}
        />
    )
}

export default youtube;