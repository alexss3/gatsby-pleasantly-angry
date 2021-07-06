module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Pleasantly Angry",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "wwSU4Nnw6B72-6siFlQsgGr-PBDWfOhWdnp5UYYNc4k",
        spaceId: "1vw3uprba87y",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
