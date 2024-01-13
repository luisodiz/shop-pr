const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hoc': path.resolve(__dirname, 'src/hoc'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  }
};