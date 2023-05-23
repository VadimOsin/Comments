import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/actions/Actions';
import Post from "./Post";
import avatar from '../img/avatars.jpg'
import Loader from "./Loader";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchPosts());
            setLoading(!loading)
        }, 500)

    }, [dispatch]);

    if (loading) {
        return <Loader/>
    }
    return (
        <div className="posts">
            <h1>Posts</h1>
            {posts.map((post) => (
                <Post key={post.id} id={post.id} title={post.title} body={post.body} author={avatar}
                      userId={post.userId}/>
            ))}

        </div>
    );
};

export default PostList;
