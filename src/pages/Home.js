import React from 'react';
import Header from "../components/Header";
import PostList from "../components/PostList";
const Home = () => {
    return (
        <div>
            {/*<Header avatar={"./utils/img/avatars.jpg"} email={"fefjskfsdf"} name={"kfvsnfls"}/>*/}
            <PostList />
        </div>
    );
};

export default Home;