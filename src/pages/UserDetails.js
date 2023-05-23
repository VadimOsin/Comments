import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchUser, fetchUserPosts} from "../redux/actions/Actions";
import {useDispatch, useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import avatar from '../img/avatars.jpg';
import Post from "../components/Post";
import Loader from "../components/Loader";

const UserDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const userPosts = useSelector((state) => state?.userPosts[id]?.posts || []);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            if (id) {
                dispatch(fetchUser(id));
                dispatch(fetchUserPosts(id));
                setLoading(!loading)
            }
        }, 500)
    }, [id, dispatch]);
    if (loading) {
        return <Loader/>
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <Card style={{width: "400px"}}>
                    <Card.Body>
                        <Card.Title>{user?.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{user?.username}</Card.Subtitle>
                        <Card.Img className="post-author" src={avatar} alt="Author"/>
                        <Card.Text>
                            <strong>Email:</strong> {user?.email}<br/>
                            <strong>Phone:</strong> {user?.phone}<br/>
                            <strong>Website:</strong> {user?.website}<br/>
                            <strong>Address:</strong> {user?.address?.street}, {user?.address?.suite}, {user?.address?.city}, {user?.address?.zipcode}<br/>
                            <strong>Company:</strong> {user?.company?.name}<br/>
                            <strong>Catch Phrase:</strong> {user?.company?.catchPhrase}<br/>
                            <strong>BS:</strong> {user?.company?.bs}<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="post">
                {userPosts && Array.isArray(userPosts) && userPosts.map((post) => (
                    <Post key={post.id} id={post.id} title={post.title} body={post.body} author={avatar}
                          userId={null}/>
                ))
                }
            </div>

        </>
    );
};

export default UserDetails;
