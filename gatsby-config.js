require('dotenv').config({
  path: '.env',
});

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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ]
}
