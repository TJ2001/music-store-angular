System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Album;
    return {
        setters:[],
        execute: function() {
            Album = (function () {
                function Album(name, artist, price, genre, id) {
                    this.name = name;
                }
                return Album;
            }());
            exports_1("Album", Album);
        }
    }
});
//# sourceMappingURL=album.model.js.map