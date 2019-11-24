import React from 'react';
import { useParams } from 'react-router-dom';

import { getUserByUserId } from '../helpers';

import { NoMatch } from './NoMatch';
import { ToMainPageButton } from './ToMainPageButton';

export const UserDetails = ({ users }) => {
    let id = useParams();
    const user = getUserByUserId(users, +id.id);
    console.log('id -->', id, user);
    if (!user) {
      return <NoMatch />
    }
    return (
      <article>
        <header><h2>User Profile</h2></header>
        <section>
          <div>
            <span>Name</span>
            <span>{user.name}</span>
          </div>
          <div>
            <span>User Name</span>
            <span>{user.username}</span>
          </div>
          <div>
            <span>City</span>
            <span>{user.address.city}</span>
          </div>
          <div>
            <span>Company name</span>
            <span>{user.company.name}</span>
          </div>
          <div>
            <span>e-mail</span>
            <span>{user.email}</span>
          </div>
          <div>
            <span>Website</span>
            <span><a href={user.website}>{user.website}</a></span>
          </div>
        </section>
        <ToMainPageButton />
      </article>
    )
};