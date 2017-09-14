module.exports = {

    files: {
        stylesheets: { joinTo: 'css/main.css' },
        javascripts: { joinTo: 'app.js' }
    },

    modules: {
        autoRequire: {
            'app.js': ['initialize']
        }
    },

    plugins: {
      postcss: {
        processors: [
          require('postcss-import')(),
          require('postcss-cssnext')()
        ]
      },
      browserSync: {
          files: 'public/**/*',
          proxy: 'localhost:1313'
      }
    }
};
