import { Component, EventEmitter} from 'angular2/core';
import { Album } from './album.model';
import { NewAlbumComponent } from './new-album.component';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'album-list',
  inputs: ['album-list'],
  outputs: ['onAlbumSelect'],
  directives: [NewAlbumComponent, AlbumComponent],
  template: `
    <new-album (onSubmitForm)="createAlbum($event)"></new-album>
    <album-display *ngFor="#currentAlbum of AlbumList"
      [class.slected]="currentAlbum === selectedAlbum"
      [album]="currentAlbum">
    </album-display>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  createAlbum(inputArray): void{
    this.albumList.push(
      new Album(inputArray[0], inputArray[1], inputArray[2], inputArray[3], this.albumList.length)
    );
    console.log(this.albumList);
  }
}
      //
      // (click)="albumClicked(currentAlbum)"
