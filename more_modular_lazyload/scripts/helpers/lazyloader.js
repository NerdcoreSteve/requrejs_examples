requirejs.config({
    shim: {
        'jquery': [],
        'jquery.lazyload': ['jquery']
    },

    paths: {
        'jquery': 'libraries/jquery-1.11.2.min',
        'jquery.lazyload': 'libraries/jquery.lazyload.min'
    }
});

define(['jquery.lazyload'], function() {
    function run() {
        $(function() {
            $('img.lazy').lazyload();
        });
    }
    return {
        run: run
    };
});
