exports.config = function(path) {
  return {

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          // Enable caching for improved performance during development
          // It uses default OS directory by default. If you need
          // something more custom, pass a path to it.
          // I.e., babel?cacheDirectory=<path>
          loaders: ['babel?cacheDirectory'],
          // Parse only app files! Without this it will go through
          // the entire project. In addition to being slow,
          // that will most likely result in an error.
          include: path
        },
      ]
      }
    }

  }