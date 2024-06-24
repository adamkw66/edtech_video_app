import React from 'react';
import Player from 'react-player';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const VideoPlayer = ({ video }) => {
    return (
        <Card>
            <Player url={video.video_url} controls width="100%" height="500px" />
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    {/* Left Column for title */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="div" gutterBottom>
                            {video.title}
                        </Typography>
                    </Grid>

                    {/* Right Column for uploader and upload time */}
                    <Grid item xs={12} md={6} container spacing={1} justifyContent="flex-end">
                        <Grid item xs={12} textAlign="right">
                            <Typography variant="body2" color="textSecondary">
                                {video.user_id}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign="right">
                            <Typography variant="body2" color="textSecondary">
                                {new Date(video.created_at).toLocaleString()}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Description */}
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                    {video.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoPlayer;
