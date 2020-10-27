module.exports = {
  publicRuntimeConfig: {
    DEPLOY_ENVIRONMENT: process.env.NODE_ENV,
    API_URL: process.env.API_HOST,
  },
  pageExtensions: ['jsx'],
}
