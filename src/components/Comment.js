import React from 'react';
import Card from 'react-bootstrap/Card';

const Comment = ({email, body}) => {
    return (
        <Card.Body className="card">
            <Card.Title>{email}</Card.Title>
            <Card.Text>
                {body}
            </Card.Text>
        </Card.Body>
    );
};

export default Comment;