import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledButton } from './styled/StyledButton';

export const ToMainPageButton = () => (
    <StyledButton>
        <NavLink to='/'>{'Back to main page'}</NavLink>
    </StyledButton>
);