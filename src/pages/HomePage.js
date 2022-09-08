import React, { useCallback } from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';
import Container from '@mui/material/Container';
import {Fab} from '@mui/material'
import {Add} from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';
import ModalCreatePostModal from '../components/CreatePostModal'
function HomePage(props) {
    const dispatch = useDispatch()
    const openCreatePostModal = useCallback(() => {
        dispatch(showModal())
    }, [dispatch])
    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <ModalCreatePostModal />
            <Fab color="primary" className='bl-fab' onClick={openCreatePostModal}>
                <Add/>
            </Fab>
        </Container>
    );
}

export default HomePage;