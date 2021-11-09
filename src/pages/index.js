// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    header, 
    headerInfo,
    headerPicture,
    headerTitle,
    CTA,
} from '../page.module.css'
// Stap 2: definieer je component
const IndexPage = ({ 
    data: { 
        wpPage: { homePage },
    },
 }) => {
    const image = getImage(homePage.headerHome.picture.localFile)
    return (
        <main>
            <Layout>
                <div className={header}>
                    <div className={headerInfo}>
                        <h1 className={headerTitle}>{homePage.headerHome.title}</h1>
                        <div
                         dangerouslySetInnerHTML={{
                             __html: homePage.headerHome.description,
                         }}
                        />
                        <a className={CTA} target="__blank" href="{homePage.callToAction.link}">
                            {homePage.callToAction.description}
                        </a>
                    </div>
                    <div>
                        <GatsbyImage className={headerPicture}
                            image={image}
                            alt={homePage.headerHome.picture.altText}
                        />
                    </div>
                </div>
            </Layout>
        </main>
    )
}

export const query = graphql`
query {
    wpPage(slug: {eq: "home"}) {
        homePage {
            headerHome {
                description 
                title
                picture {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
                        }
                    }
                }
            }
            callToAction {
                link
            }
            featuredArtists {
                artists {
                    ... on WpArtist {
                        id
                        artistMeta {
                            artistName
                            firstName
                            lastName
                            profilePicture {
                                altText
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                                    }
                                }
                            }
                        }
                        slug
                    }
                }
                description
                title
            }
        }
    }
}

`
// Stap 3: Exporteer je component
export default IndexPage
