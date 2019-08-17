import React from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';

const VideoList = ({ videos, onVideoSelect }) => {
    if (!videos) return <div></div>

    const videoList = videos.map((v, id) => <VideoItem key={id} video={v} onVideoSelect={onVideoSelect} />)

    return (
        <Grid container spacing={3}>
            {videoList}
        </Grid>
    )
}

export default VideoList