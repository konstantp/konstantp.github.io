module.exports = {
  plugins: ["transform-es2015-modules-systemjs"],
  presets: [['@babel/preset-env', {
    targets: {
      'esmodules': true,
    }
  }]],
};
