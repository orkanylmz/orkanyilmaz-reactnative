module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@features": "./src/features",
            "@api": "./src/api",
            "@screens": "./src/screens",
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ["transform-remove-console"],
      },
    },
  };
};
