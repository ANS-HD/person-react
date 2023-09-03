import tailWindCss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

module.exports = {
    plugins: [tailWindCss('./tailwind.config.js'), autoprefixer],
};