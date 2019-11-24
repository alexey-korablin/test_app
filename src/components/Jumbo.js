import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import { StyledJumbo } from './styled/StyledJumbo';

export const Jumbo = () => (
    <StyledJumbo>
      <Jumbotron fluide className='jumbo'>
        <div className='overlay'></div>
        <Container>
          <h1>Welcome</h1>
          <p>Look the posts, comments and users</p>
        </Container>
      </Jumbotron>
    </StyledJumbo>
  );