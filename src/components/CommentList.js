import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const CommentList = ({ comments }) => {
    return (
        <>
            <Typography variant="h6" component="h2" gutterBottom>
                Comments ({comments.length})
            </Typography>
            <Box>
                {comments.map((comment) => (
                    <Card key={comment.comment_id} variant="outlined" mb={2}>
                        <CardContent>
                            <Typography variant="body1">{comment.content}</Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                by {comment.user_id} on {new Date(comment.created_at).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </>
    );
};

export default CommentList;
