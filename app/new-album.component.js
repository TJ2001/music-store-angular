System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NewAlbumComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewAlbumComponent = (function () {
                function NewAlbumComponent() {
                    this.onSubmitForm = new core_1.EventEmitter();
                }
                NewAlbumComponent.prototype.addAlbum = function (addName, addArtist, addPrice, addGenre) {
                    this.onSubmitForm.emit([addName.value, addArtist.value, addPrice.value, addGenre.value]);
                    addName.value = "";
                    addArtist.value = "";
                    addPrice.value = "";
                    addGenre.value = "";
                };
                NewAlbumComponent = __decorate([
                    core_1.Component({
                        selector: 'new-album',
                        outputs: ['onSubmitForm'],
                        template: "\n  <div class='container'>\n    <h2>Our Albums</h2>\n    <div class=\"form-group\">\n      <label for=\"name\">Album Title:</label>\n      <input type=\"text\" class=\"form-control input-lg\" id=\"name\" placeholder=\"Joshua Tree\" #addName>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist\">Artist</label>\n      <input type=\"text\" class=\"form-control input-lg\" id=\"artist\" placeholder=\"U2\" #addArtist>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"price\">Price</label>\n      <input type=\"text\" class=\"form-control input-lg\" id=\"price\" placeholder=\"13\" #addPrice>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"genre\">Genre</label>\n      <input type=\"text\" class=\"form-control input-lg\" id=\"genre\" placeholder=\"U2\" #addGenre>\n    </div>\n    <button (click)=\"addAlbum(addName, addArtist, addPrice, addGenre)\" class=\"btn-danger btn-lg add-button\">Add Album</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewAlbumComponent);
                return NewAlbumComponent;
            }());
            exports_1("NewAlbumComponent", NewAlbumComponent);
        }
    }
});
//# sourceMappingURL=new-album.component.js.map