// Stap 1: Importeer React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Stap 2: definieer je component
const IndexPage = () => {
    return (
        <Layout pageTitle ="Welcome to Ziani's Agency">
            <p>Something will come here.</p>
            <StaticImage
                alt="randomized unplash image"
                src="../images/gatsby-astronaut.png"
                />
        </Layout>
    )
}
// Stap 3: Exporteer je component
export default IndexPage
