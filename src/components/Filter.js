import React from 'react';

export const Filter = ({ users, onChangeFilterOption, filter }) => {
    console.log(users, filter);
    return (
      <select value={filter} onChange={onChangeFilterOption}>
        {users && users.map(user => 
          <option key={user.id} value={user.username}>{user.username}</option>)}
      </select>
    );
  }