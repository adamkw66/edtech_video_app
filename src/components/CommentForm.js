import React, { useState } from 'react';
import { createComment } from '../api';
import { TextField, Button, Box } from '@mui/material';

const CommentForm = ({ videoId, onCommentCreated }) => {
    const [content, setContent] = useState(''); // Comment content
    const userId = process.env.USER_ID;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = { video_id: videoId, content, user_id: userId };
        const response = await createComment(newComment); // API call to create comment

        // Validate the comment was successfully created
        if (response.data.success) {
            onCommentCreated();
        } else {
            alert('Error adding comment');
        }

        setContent('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} autoComplete="off" mb={4}>
            <TextField
                fullWidth
                multiline
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                label="Add a comment"
                variant="outlined"
                required
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '8px' }}>
                Submit
            </Button>
        </Box>
    );
};

export default CommentForm;
