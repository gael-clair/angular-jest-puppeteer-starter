module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
        include: require('path').join(__dirname, 'src/app'),
        exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /polyfills\.ts$/, /main\.ts$/],
      },
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            require('@fullhuman/postcss-purgecss')({
              content: ['./src/**/*.html'],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            }),
            require('autoprefixer'),
          ],
        },
      },
    ],
  },
};
