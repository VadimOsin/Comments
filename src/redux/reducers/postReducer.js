import {FETCH_POSTS_SUCCESS, FETCH_COMMENTS_SUCCESS, FETCH_USER} from '../actions/postActions';

const initialState = {
    posts: [],
    comments: {},
    user: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.payload.postId]: action.payload.comments,
                },
            };
        case FETCH_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default postsReducer;
