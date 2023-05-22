import React from 'react';

const Comment = ({ email, body }) => {
    return (
        <div className="comment">
            <div className="comment-email">{email}</div>
            <div className="comment-text">{body}</div>
        </div>
    );
};

export default Comment;