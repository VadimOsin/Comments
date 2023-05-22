import React, { useState } from 'react';
import Comment from './Comment';
import { fetchComments } from '../redux/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';

const Post = ({ title, body, author, postId }) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const comments = useSelector((state) => state.comments[postId] || []); // Получение комментариев для текущего поста

    const handleCommentsClick = () => {
        setShowComments(!showComments);
        if (!showComments) {
            dispatch(fetchComments(postId));
        }
    };
    return (
        <div className="post">
            <div className="post-title">{title}</div>
            <div className="post-text">{body}</div>
            <img className="post-author" src={author} alt="Author" />
            <div onClick={handleCommentsClick}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </div>

            {showComments &&
                comments.map((comment) => (
                    <Comment key={comment.id} email={comment.email} text={comment.body} />
                ))}
        </div>
    );
};

export default Post;
