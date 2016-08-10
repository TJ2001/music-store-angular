import { Component, EventEmitter} from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { NewAlbumComponent } from './new-album.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [NewAlbumComponent, AlbumComponent],
  template: `
    <new-album (onSubmitForm)="createAlbum($event)"></new-album>
    <h1>Album List</h1>
    <album-display *ngFor="#currentAlbum of albumList"
      [class.slected]="currentAlbum === selectedAlbum"
      (click)="albumClicked(currentAlbum)"
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
  albumClicked(clickedAlbum: Album): void {
    console.log('child', clickedAlbum);
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  createAlbum(inputArray): void{
    this.albumList.push(
      new Album(inputArray[0], inputArray[1], inputArray[2], inputArray[3], this.albumList.length)
    );
    console.log(this.albumList);
    console.log(inputArray[2]);
  }
}
