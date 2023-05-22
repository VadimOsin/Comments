import React, { useState } from 'react';
import Comment from './Comment';

const Post = ({ title, text, author, comments }) => {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div className="post">
            <div className="post-title">{title}</div>
            <div className="post-text">{text}</div>
            <div className="post-author">{author}</div>
            <button onClick={toggleComments}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {showComments && (
                <div className="comments">
                    {comments.map((comment) => (
                        <Comment key={comment.id} email={comment.email} text={comment.body} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Post;