// Stap 1: Importeer React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
// Stap 2: definieer je component
const AboutPage = () => {
    return (
        <Layout pageTitle ="Welcome to Ziani's Agency">
            <p>Something about us will be shown soon.</p>
        </Layout>
    )
}
// Stap 3: Exporteer je component
export default AboutPage