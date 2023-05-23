export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_USER = 'FETCH_USER';

export const FETCH_USER_POSTS = 'FETCH_USER_POSTS';
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS';

export const fetchUser = (userId) => ({
    type: FETCH_USER,
    payload: userId
});


export const fetchPosts = () => ({
    type: FETCH_POSTS,
});

export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const fetchComments = (postId) => ({
    type: FETCH_COMMENTS,
    payload: postId,
});

export const fetchCommentsSuccess = (comments) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
});

export const fetchUserPosts = (userId) => ({
    type: FETCH_USER_POSTS,
    payload: userId,
});

export const fetchUserPostsSuccess = (posts) => ({
    type: FETCH_USER_POSTS_SUCCESS,
    payload: posts,
});


