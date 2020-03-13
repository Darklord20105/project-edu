/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Company Name",
    description: "Company Name",
    author: "DarkLord",
    facebook: "http://www.facebook.com",
    twitter: "http://www.twitter.com",
    youtube: "http://www.youtube.com",
    linkedin: "http://www.linkedin.com",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ]
}
