import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material';

const VideoList = ({ videos }) => {
    return (
        <Grid container spacing={4}>
            {videos.map((video) => (
                <Grid item xs={12} sm={6} md={4} key={video.id}>
                    <Card>
                        <CardActionArea component={Link} to={`/video/${video.id}`} state={video}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {video.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Uploaded by: {video.user_id}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Uploaded at: {new Date(video.created_at).toLocaleString()}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default VideoList;
