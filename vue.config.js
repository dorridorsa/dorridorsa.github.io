
module.exports = {
  pwa: {
    manifestOptions: {
      background_color: '#F09680',
      
    },
    name: 'DM',
    themeColor: '#FFBA9E',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5,
          },
          urlPattern: 'https://makeup-api.herokuapp.com/api/v1/products.json'
        }
      ]
    }
  }
}