require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `HKSJ`,
    siteUrl: `${process.env.siteUrl}`,
    description: `Here lies the sexy stuff, HKSJ bois.`,
    author: `@Jeralt`,
    GO_KEY: process.env.GO_KEY,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HKSJ`,
        short_name: `HKSJ`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#CC6837`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/about/*"],
      },
    },
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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    `gatsby-plugin-react-helmet`,
  ],
}
