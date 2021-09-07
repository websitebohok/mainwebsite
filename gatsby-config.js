/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Bohok`,
    titleTemplate: `%s — Bohok`,
    description: `Arsip Katarsis oleh Bohok.`,
    siteUrl: `https://kakbohok.netlify.app/`,
    image: `src/images/main-img.png`,
    address: `Jakarta, Indonesia`,
    email: `kakbohok@gmail.com`,
    author: `Alvaryan Maulana`,
    authorSite: `https://www.bohok.com`,
    twitterUsername: `@bohok`,
    twitterURL: `https://twitter.com/`,
    instagramURL: `https://www.instagram.com/bohok`,
    mediumURL: `https://alvaryanm.medium.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bohok - Sebuah arsip katarsis`,
        short_name: `Bohok`,
        start_url: `/`,
        background_color: `#FFFDFD`,
        theme_color: `#757575`,
        display: `standalone`,
        icon: `src/images/icon-DM-serif.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "ENTER YOUR GA TRACKING ID HERE",
        head: false,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contentImages`,
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
