System.register(['angular2/core', './album.model', './new-album.component', './album.component'], function(exports_1, context_1) {
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
    var core_1, album_model_1, new_album_component_1, album_component_1;
    var AlbumListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (album_model_1_1) {
                album_model_1 = album_model_1_1;
            },
            function (new_album_component_1_1) {
                new_album_component_1 = new_album_component_1_1;
            },
            function (album_component_1_1) {
                album_component_1 = album_component_1_1;
            }],
        execute: function() {
            AlbumListComponent = (function () {
                function AlbumListComponent() {
                    this.onAlbumSelect = new core_1.EventEmitter();
                }
                AlbumListComponent.prototype.createAlbum = function (inputArray) {
                    this.albumList.push(new album_model_1.Album(inputArray[0], inputArray[1], inputArray[2], inputArray[3], this.albumList.length));
                    console.log(this.albumList);
                };
                AlbumListComponent = __decorate([
                    core_1.Component({
                        selector: 'album-list',
                        inputs: ['album-list'],
                        outputs: ['onAlbumSelect'],
                        directives: [new_album_component_1.NewAlbumComponent, album_component_1.AlbumComponent],
                        template: "\n    <new-album (onSubmitForm)=\"createAlbum($event)\"></new-album>\n    <album-display *ngFor=\"#currentAlbum of AlbumList\"\n      [class.slected]=\"currentAlbum === selectedAlbum\"\n      [album]=\"currentAlbum\">\n    </album-display>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumListComponent);
                return AlbumListComponent;
            }());
            exports_1("AlbumListComponent", AlbumListComponent);
        }
    }
});
//
// (click)="albumClicked(currentAlbum)"
//# sourceMappingURL=album-list.component.js.map