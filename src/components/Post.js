import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchComments} from '../redux/actions/postActions';
import Comment from './Comment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Post = ({title, body, author, postId}) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const comments = useSelector((state) => state.comments[postId] || []);

    const handleCommentsClick = () => {
        setShowComments(!showComments);
        if (!showComments) {
            dispatch(fetchComments(postId));
        }
    };

    return (
        <Card className="post">
            <Card.Title className="post-title">{title}</Card.Title>
            <Card.Text className="post-text">{body}</Card.Text>
            <Card.Img className="post-author" src={author} alt="Author"/>
            <Button onClick={handleCommentsClick} variant="primary">
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </Button>

            <div className="comments">
                {showComments &&
                    comments.map((comment) => (
                        <Comment key={comment.id} email={comment.email} body={comment.body}/>
                    ))}
            </div>
        </Card>
    );
};

export default Post;
