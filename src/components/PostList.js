import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/actions/postActions';
import Post from "./Post";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);


    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);



    return (
        <div>
            <h1>Posts</h1>
            {/*{posts.map((post) => (*/}
            {/*    <div key={post.id}>*/}
            {/*        <h3>{post.title}</h3>*/}
            {/*        <p>{post.body}</p>*/}
            {/*        <button onClick={() => handleCommentsClick(post.id)}>Show Comments</button>*/}
            {/*        {comments[post.id] && (*/}
            {/*            <ul>*/}
            {/*                {comments[post.id].map((comment) => (*/}
            {/*                    <li key={comment.id}>*/}
            {/*                        <strong>{comment.name}</strong>: {comment.body}*/}
            {/*                    </li>*/}
            {/*                ))}*/}
            {/*            </ul>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*))}*/}
            {posts.map((post) => (
                <Post key={post.id} postId={post.id} title={post.title} body={post.body}
                      author="./"/>
            ))}
        </div>
    );
};

export default PostList;
