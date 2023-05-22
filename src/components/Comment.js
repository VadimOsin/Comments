import React from 'react';

const Comment = ({ email, text }) => {
    return (
        <div className="comment">
            <div className="comment-email">{email}</div>
            <div className="comment-text">{text}</div>
        </div>
    );
};

export default Comment;