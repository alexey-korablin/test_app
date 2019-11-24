import React from 'react';

export const Comment = ({ id, name, body }) => (
    <article key={id}>
      <p><span>{name}</span> wrote:</p>
      <p>{body}</p>
      <hr />
    </article>
  );