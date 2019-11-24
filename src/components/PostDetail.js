import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
    getPostByPostId,
    getUserByUserId,
    getCommentsByPostId,
    isSameNumberOfComments
} from '../helpers';

import { BASE_URL, COMMENTS } from '../constants/urls';

import { Post } from './Post';
import { Author } from './Author';
import { Comment } from './Comment';
import { NoMatch } from './NoMatch';
import { ToMainPageButton } from './ToMainPageButton';

export const PostDetail = ({ posts, users, comments, onHandleUpdate }) => {
    const [newComments, setNewComments] = useState(comments);
    const id = useParams();
    const postId = +id.id;
    const post = getPostByPostId(posts, postId);
    const userId = post && post.userId;
    const user = getUserByUserId(users, userId);
    const filteredComments = getCommentsByPostId(comments, postId);
  
    useEffect(() => {
      const intervalID = setInterval(() => {
        console.log('request');
        fetch(BASE_URL + COMMENTS)
          .then(response => response.json())
          .then(comments => {
            setNewComments(comments);
            if (!isSameNumberOfComments(comments, newComments, postId)) {
              onHandleUpdate(newComments);
            }
          })
          .catch(e => console.error(e));
      }, 10000);
  
      return () => {clearInterval(intervalID)};
    });
  
    if (!post) {
      return <NoMatch />;
    }
    return (<article>
      <Post title={post.title} body={post.body} />
      <Author id={user.id} username={user.username} email={user.email} />
      <section>
        <header><h3>Comments</h3></header>
        {filteredComments && filteredComments.map(
          comment => (
            <Comment
              key={comment.id}
              id={comment.id} 
              name={comment.name} 
              body={comment.body} />
          )
        )}
      </section>
      <ToMainPageButton />
    </article>);
  };