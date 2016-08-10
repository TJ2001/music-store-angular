import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';


@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
  <div class='container'>
    <album-list
      [albumList]="albums"
      (onAlbumSelect)="albumWasSelected($event)">
    </album-list>
  </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album('Second Story', 'Open House', 15, 'folk', 0),
      new Album('Basket Case', 'Green Day', 13, 'rock', 1),
      new Album('If the Cap Fits', 'Kevin Burke', 20, 'folk', 2),
      new Album('Abbey Road', 'Beattles', 18, 'rock', 3)
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log('parent', clickedAlbum);
  }
}
