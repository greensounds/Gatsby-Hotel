import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const useHabitaciones = () => {
    const data = useStaticQuery(graphql`
        query {
                allDatoCmsHabitacion {
                    nodes {
                        titulo
                        id
                        slug
                        contenido
                        imagen {
                            gatsbyImageData
                        }
                    }
                }
            }
    `)
    console.log(data)
    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug,
    }))
}

export default useHabitaciones;