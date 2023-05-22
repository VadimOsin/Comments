
import { FETCH_POSTS_SUCCESS, FETCH_COMMENTS_SUCCESS } from '../actions/postActions';

const initialState = {
    posts: [],
    comments: {},
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
        default:
            return state;
    }
};

export default postsReducer;
