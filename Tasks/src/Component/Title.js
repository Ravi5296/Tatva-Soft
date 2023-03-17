import React from 'react';
import List from './List';

function Title(props) {
  const { title, description } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <hr />
      <List/>
    </div>
  );
}

export default React.memo(Title) ;