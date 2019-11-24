import React from 'react';

export const Post = ({title, body}) => (
    <section>
      <header><h2>{title}</h2></header>
      <p>{body}</p>
    </section>
);