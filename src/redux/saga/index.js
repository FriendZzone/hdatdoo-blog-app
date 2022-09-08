import { takeLatest, call, put} from 'redux-saga/effects'
import { createPost, fetchPosts, updatePost } from '../../apis';
import * as actions from '../actions'

function* fetchPostsSaga(action){
    try {
        const posts = yield call(fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts))
     
    } catch (error) {
        console.log(error)
        yield put(actions.getPosts.getPostsFailure(error))
    }
}

function* createPostsSaga(action){
    try {
        const posts = yield call(createPost, action.payload);
        yield put(actions.createPost.createPostSuccess(posts.data))
     
    } catch (error) {
        console.log(error)
        yield put(actions.createPost.createPostFailure(error))
    }
}

function* updatePostSaga(action){
    try {
        const posts = yield call(updatePost, action.payload);
        yield put(actions.updatePost.updatePostSuccess(posts.data))
     
    } catch (error) {
        console.log(error)
        yield put(actions.updatePost.updatePostFailure(error))
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostsSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;