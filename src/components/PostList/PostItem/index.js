import React, { useCallback } from 'react';
import { Card, Avatar, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { MoreVert, Favorite } from '@mui/icons-material'
import { formatDate } from '../../../utils';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../../redux/actions';
function PostItem({ post }) {
    const dispatch = useDispatch()
    const handleClickLike = useCallback(() => {
        const newData = {...post}
        newData.likeCount += 1
        dispatch(updatePost.updatePostRequest(newData))
    }, [dispatch, post])
    return (
        <Card>
            <CardHeader avatar={<Avatar>A</Avatar>} title={post.author}
                subheader={formatDate(post.updatedAt)}
                action={<IconButton>
                    <MoreVert />
                </IconButton>}
            >
            </CardHeader>
            <CardMedia image={post.attachment} title="Title" className="card-media" src=""   component="img"/>
            <CardContent>
                <Typography variant="h5" component="h5" color="textPrimary">{post.title}</Typography>
                <Typography variant="body2" component="p" color="textSecondary">{post.content}</Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleClickLike}>
                    <Favorite />
                </IconButton>
                <Typography component="span" color="textSecondary">{post.likeCount} likes</Typography>
            </CardActions>
        </Card>
    );
}

export default PostItem;