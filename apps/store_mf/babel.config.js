module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-typescript", "@babel/preset-react", "@babel/preset-env"];
  const plugins = [["@babel/transform-runtime"]];

  return {
    presets,
    plugins
  };
}