System.register(['angular2/core', './album-list.component', './album.model'], function(exports_1, context_1) {
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
    var core_1, album_list_component_1, album_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (album_list_component_1_1) {
                album_list_component_1 = album_list_component_1_1;
            },
            function (album_model_1_1) {
                album_model_1 = album_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.albums = [
                        new album_model_1.Album('Second Story', 'Open House', 15, 'folk', 0)
                    ];
                }
                AppComponent.prototype.albumWasSelected = function (clickedAlbum) {
                    console.log('parent', clickedAlbum);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [album_list_component_1.AlbumListComponent],
                        template: "\n  <div class='container'>\n    <album-list\n      [albumList]=\"albums\"\n      (onAlbumSelect)=\"albumWasSelected($event)\">\n    </album-list>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map