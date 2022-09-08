import React, { useEffect } from 'react';
import { Grid } from '@mui/material'
import PostItem from './PostItem';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions";
import { postsState$ } from '../../redux/selectors';

function PostList(props) {
    const dispatch = useDispatch()
    const postList = useSelector(postsState$)

    useEffect(() => {
        dispatch(getPosts.getPostsRequest())
    }, [dispatch])

    return (
        <Grid container spacing={2} alignItems="stretch">
            {!!postList.length &&
                postList.map(post => (
                    <Grid item xs={12} sm={6} key={post._id}>
                        <PostItem post={post} />
                    </Grid>
                ))}
        </Grid>
    );
}

export default PostList;