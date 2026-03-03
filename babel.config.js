export default {
  presets: [
    // transpile modern JS
    ['@babel/preset-env', { targets: { node: 'current' } }],
    // enable JSX support for React tests
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
