import React from 'react';
import { NavLink } from 'react-router-dom';

export const PostItem = ({ post, user }) => (
    <article>
        <header><h2><NavLink to={`/post/${post.id}`}>{post.title}</NavLink></h2></header>
        <p>{post.body.slice(0, 100) + '...'}</p>
        <footer><span>written by: <NavLink to={`/user/${user.id}`}>{user.username}</NavLink></span></footer>
    </article>
);