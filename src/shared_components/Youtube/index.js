import React from 'react';
import YouTube from 'react-youtube';

const youtube = props => {
    const opts = {
        height: '100%',
        width: '100%',
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