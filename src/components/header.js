import React from 'react';
import {css} from '@emotion/react'
import Navegacion from './nav'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const EnlaceHome = styled(Link)`
  color: #FFF;
  text-decoration: none;
  text-align: center;
`

const Header = () => {
  return (
    <div>
      <header
        css={css`
          background-color: rgba(44,62,80);
          padding: 20px;
        `}
      >
        <div 
          css={css`
            max-width:1200px;
            margin: 0 auto;
            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <EnlaceHome to={'/'} >Hotel Gatsby</EnlaceHome>
          <Navegacion />
        </div>
      </header>
    </div>
  );
};

export default Header;
