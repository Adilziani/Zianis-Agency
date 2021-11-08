module.exports = {
  siteMetadata: {
    title: "Artist Agency",
    description: "Artist Agency was founded in 1977",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://zianis-agency.local/graphql",
      },    
    },
  ],
};