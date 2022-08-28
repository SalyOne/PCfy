let mix = require('laravel-mix');


mix.js('src/js/app.js', 'assets/dist')
    .sass('src/scss/app.scss', 'assets/dist')