import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
  <div>
    <p>Name: {{album.name}} Artist: {{album.artist}} Price: {{album.price}} Genre: {{album.genre}}</p>
  </div>
  `
})

export class AlbumComponent {
  public album: Album;
}
