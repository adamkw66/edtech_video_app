import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import Banner from '../components/Banner';
import { getVideoComments } from '../api';
import { Container, Box } from '@mui/material';

const VideoPage = () => {
    // Getting video data
    const location = useLocation();
    const video = location.state;
    const videoId = video.id;

    const [comments, setComments] = useState([]); // List of comments for video

    const fetchComments = async () => {
        const response = await getVideoComments(videoId); // API call to get video comments
        setComments(response.data.comments);
    };

    useEffect(() => {
        fetchComments();
    }, [videoId]);

    // Call back to refresh the comments list
    const handleCommentCreated = () => {
        fetchComments();
    };

    return (
        <>
            <Banner height='50px'/>
            <Container maxWidth="md">
                <Box my={4}>
                    <VideoPlayer video={video} />
                </Box>
                <Box my={4}>
                    <CommentForm videoId={videoId} onCommentCreated={handleCommentCreated} />
                </Box>
                <Box my={4}>
                    <CommentList comments={comments} />
                </Box>
            </Container>
        </>
    );
};

export default VideoPage;
