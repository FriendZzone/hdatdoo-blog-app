import React, { useCallback, useState } from 'react';
import { Button, Modal, TextareaAutosize, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { createPostModalState$ } from '../../redux/selectors';
import FileBase64 from 'react-file-base64';
import { createPost, hideModal } from '../../redux/actions'

function CreatePostModal(props) {
    const { isShow } = useSelector(createPostModalState$)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: ''
    })

    const onClose = useCallback(() => {
        dispatch(hideModal())
        setData({
            title: '',
            content: '',
            attachment: ''
        })
    }, [dispatch])

    const onSubmit = useCallback(() => {
        dispatch(createPost.createPostRequest(data))
        onClose()

    }, [data, dispatch])
    return (
        <Modal open={isShow} onClose={onClose}>
            <div className='create-post-modal'>
                <h2 className='text-center'>Create new post</h2>
                <form noValidate autoComplete='off' className="modal-form">
                    <TextField
                        className='form__title mt-4'
                        label="Title"
                        value={data.title}
                        onChange={e => setData({ ...data, title: e.target.value })}
                    ></TextField>
                    <TextareaAutosize
                        className='form__content mt-4'
                        maxRows={15}
                        minRows={10}
                        placeholder="Content"
                        value={data.content}
                        onChange={e => setData({ ...data, content: e.target.value })}
                    />
                    <FileBase64 accept="image/"
                        multiple={false}
                        className="mt-4"
                        type="file"
                        value={data.attachment}
                        onDone={e => {
                            setData({
                                ...data, attachment: e.base64
                            })}}
                    />
                    <div className='form__button'>
                        <Button color="primary"
                            variant="contained"
                            fullWidth
                            onClick={onSubmit}
                            className="mt-4"
                        >Create</Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default CreatePostModal;