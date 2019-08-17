import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './components';

const App = () => {

  const [state, setState] = useState(
    {
      videos: [],
      selectedVideo: null
    }
  )

  useEffect(() => {
    handleSubmit("learn react");
  }, [])

  const handleSubmit = async searchTerm => {
    const response = await youtube(searchTerm)

    console.log(response)

    setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  const handleVideoSelect = (video) => {
    setState({
      videos: state.videos,
      selectedVideo: video
    })
  }

  return (
    <Grid justify="center" container spacing={5}>
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={state.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={state.videos} onVideoSelect={handleVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
