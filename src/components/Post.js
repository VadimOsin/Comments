import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchComments, fetchUser} from '../redux/actions/postActions';
import Comment from './Comment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Post = ({title, body, author, id, userId}) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const comments = useSelector((state) => state.comments[id] || []);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (userId) {
            dispatch(fetchUser(userId));
        }
    }, [userId, dispatch]);


    const handleCommentsClick = () => {
        setShowComments((prevState) => !prevState);
    };

    useEffect(() => {
        if (showComments && comments.length === 0) {
            dispatch(fetchComments(id));
        }
    }, [showComments, comments.length, dispatch, id]);

    return (
        <Card className="post">
            <Card.Title className="post-title">{title}</Card.Title>
            <Card.Text className="post-text">{body}</Card.Text>
            <Card.Text className="post-text"> <Card.Img className="post-author" src={author} alt="Author"/>
                {user.name}</Card.Text>
            <Button onClick={handleCommentsClick} variant="primary">
                Комментарии
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
