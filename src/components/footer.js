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

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
      <footer
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
              justify-content: center;
            }
          `}
        >
          <p
            css={css`
                color: white;
                margin: 0;
            `}
          >Hotel Gatsby - Todos los derechos reservados {year} &copy; </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
