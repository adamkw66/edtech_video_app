import React, { useState } from 'react';
import { createVideo } from '../api';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const VideoForm = ({ onVideoCreated, onClose }) => {
    const [title, setTitle] = useState(''); // Video title
    const [description, setDescription] = useState(''); // Video description
    const [videoUrl, setVideoUrl] = useState(''); // Video URL
    const [error, setError] = useState('');
    const userId = process.env.REACT_APP_USER_ID;

    // Check that video is from either Youtube or Vimeo
    const isValidUrl = (url) => {
        const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/;
        const vimeoRegex = /^(https?\:\/\/)?(www\.)?vimeo\.com\/.+$/;
        return youtubeRegex.test(url) || vimeoRegex.test(url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure that user is uploading valid video
        if (!isValidUrl(videoUrl)) {
            setError('You can only upload videos from YouTube or Vimeo.');
            return;
        }

        const newVideo = { user_id: userId, title, description, video_url: videoUrl };
        const response = await createVideo(newVideo); // API call to create new video
        
        // Validate video was successfully created
        if (response.data.success) {
            onVideoCreated();
        } else {
            alert('Error adding video');
        }

        setTitle('');
        setDescription('');
        setVideoUrl('');
        setError('');
        if (onClose) onClose(); // Close the modal
    };

    return (
        <Box component="form" onSubmit={handleSubmit} autoComplete="off">
            {error && <Alert severity="error">{error}</Alert>}
            <Typography variant="body2" color="textSecondary" gutterBottom>
                You can only upload videos from YouTube or Vimeo.
            </Typography>
            <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
                required
                multiline
                rows={4}
            />
            <TextField
                fullWidth
                label="Video URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Create Video
            </Button>
        </Box>
    );
};

export default VideoForm;
