import React from 'react';
import { NavLink } from 'react-router-dom';

export const Author = ({ id, username, email }) => (
    <section>
      <div>
        <span>Author</span>
        <span><NavLink to={`/user/${id}`}>{username}</NavLink></span>
      </div>
      <div>
        <span>E-mail</span>
        <span>{email}</span>
      </div>
    </section>
  )