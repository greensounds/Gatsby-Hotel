import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 4rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
    }
`

const ContenidoNosotros = () => {
    const resultado = useStaticQuery(graphql`
        query {
                allDatoCmsPagina(filter: { slug: { eq: "nosotros"} }) {
                nodes {
                    titulo,
                    contenido,
                    imagen {
                        gatsbyImageData
                    }
                }
            } 
        }
    `)
    const { titulo, contenido, imagen} = resultado.allDatoCmsPagina.nodes[0];
    return (
        <>
          <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{titulo}</h2>
          <Contenido>
            <p>{contenido}</p>
            <GatsbyImage image={imagen.gatsbyImageData} alt="nosotros" />
          </Contenido>  
        </>
    );
};

export default ContenidoNosotros;