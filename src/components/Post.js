import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchComments, fetchUser} from '../redux/actions/Actions';
import Comment from './Comment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {USER} from "../routes/consts";
import {useNavigate} from "react-router";

const Post = ({title, body, author, id, userId}) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const comments = useSelector((state) => state.comments[id] || []);
    let navigate = useNavigate()

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
            <Card.Text className="post-text">{body}</Card.Text> <Card.Img
            className="post-author" src={author} alt="Author" onClick={() => navigate(`${USER}/${id}`)}/>
            {userId ?
                <>
                    <Button onClick={handleCommentsClick} variant="primary">
                        Комментарии
                    </Button>
                    <div className="comments">
                        {showComments &&
                            comments.map((comment) => (
                                <Comment key={comment.id} email={comment.email} body={comment.body}/>
                            ))}
                    </div>
                </> : null}
        </Card>
    );
};

export default Post;
