import React, { useState, useEffect } from 'react';
import VideoForm from '../components/VideoForm';
import VideoList from '../components/VideoList';
import Banner from '../components/Banner';
import { getUserVideos } from '../api';
import { Container, Typography, TextField, Button, Box, Modal } from '@mui/material';

const HomePage = () => {
    const [videos, setVideos] = useState([]); // List of videos
    const [searchQuery, setSearchQuery] = useState(''); // Search bar query
    const [open, setOpen] = useState(false); // Open close for modal
    const userId = process.env.REACT_APP_USER_ID;

    const fetchVideos = async () => {
        const response = await getUserVideos(userId); // API call to get user's videos
        setVideos(response.data.videos);
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    // Call back to refresh the video list
    const handleVideoCreated = () => {
        fetchVideos();
    };

    // Filter videos based on title
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle modal open and close
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Banner />
            <Container>
                <Typography variant="h4" gutterBottom align="center">
                    Educational Videos
                </Typography>

                { /* Search bar */ }
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                    <TextField
                        label="Search Videos"
                        variant="outlined"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ flexGrow: 1, marginRight: '16px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleOpen}>
                        Add Video
                    </Button>
                </Box>

                <VideoList videos={filteredVideos} />

                { /* Modal for adding videos */ }
                <Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box 
                        position="absolute" 
                        bgcolor="background.paper" 
                        p={4} 
                        boxShadow={24}
                        style={{ width: 500 }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Add New Video
                        </Typography>
                        <VideoForm onVideoCreated={handleVideoCreated} onClose={handleClose} />
                    </Box>
                </Modal>
            </Container>
        </>
    );
};

export default HomePage;
