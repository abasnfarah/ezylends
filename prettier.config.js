/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  tabWidth: 2,
  spaceBeforeFunctionParen: true
}

export default config
