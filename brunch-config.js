module.exports = {

    files: {
        stylesheets: { joinTo: 'css/main.css' },
        javascripts: { joinTo: 'app.js' }
    },

    plugins: {
      postcss: {
        processors: [
          require('postcss-cssnext')()
        ]
      },
      browserSync: {
          files: 'public/**/*',
          proxy: 'localhost:1313'
      }
    }
};
