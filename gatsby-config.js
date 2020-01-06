require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `HKSJ`,
    description: `HKSJ Bois`,
    author: `@Jeralt`,
    GO_KEY:process.env.GO_KEY
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options:{
        spaceId : process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options:{
        plugins:[
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options:{
              maxWidth: 750,
              linkImagesToOriginal:false,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HKSJ`,
        short_name: `HKSJ`,
        start_url: `/`,
        background_color: `#666666`,
        theme_color: `#666666`,
        display: `minimal-ui`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
