import React from 'react';
import moment from 'moment';

const VideoLength = ({ time }) => {

    const videoNameInSeconds = moment().startOf('day').seconds(time).format(time > 3600 ? 'H:mm:ss' : 'mm:ss')

    return (
        <div className="relative  bg-black py-1 px-2 text-white text-xs rounded-md">
            {videoNameInSeconds}
        </div>
    )
}

export default VideoLength