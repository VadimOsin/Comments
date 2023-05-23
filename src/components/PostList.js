import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/actions/Actions';
import Post from "./Post";
import avatar from '../img/avatars.jpg'

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);


    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <div className="posts">
            <h1>Posts</h1>
            {posts.map((post) => (
                <Post key={post.id}  id={post.id} title={post.title} body={post.body} author={avatar} userId={post.userId}/>
            ))}

        </div>
    );
};

export default PostList;
