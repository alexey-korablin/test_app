import React from 'react';

import { Filter } from './Filter';
import { PostItem } from './PostItem';

export const Main = ({ 
                posts, 
                users,
                filter,
                onChange }) => {
  console.log(users);
  return (
  <>
    <section>
      <Filter users={users} onChangeFilterOption={onChange} filter={filter} />
    </section>
    <section>
      {posts && posts.map(post => {
        const user = users.find(user => user.id === post.userId);
        return <PostItem 
                  key={post.id}
                  post={post}
                  title={post.title} 
                  body={post.body}
                  user={user}/>
      })}
    </section>
  </>);
};