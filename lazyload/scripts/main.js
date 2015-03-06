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

require(['jquery.lazyload'], function() {
    $(function() {
        $('img.lazy').lazyload();
    });
});
