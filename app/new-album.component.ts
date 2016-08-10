import {Component, EventEmitter} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onSubmitForm'],
  template: `
  <div class='container'>
    <h2>Our Albums</h2>
    <div class="form-group">
      <label for="name">Album Title:</label>
      <input type="text" class="form-control input-lg" id="name" placeholder="Joshua Tree" #addName>
    </div>
    <div class="form-group">
      <label for="artist">Artist</label>
      <input type="text" class="form-control input-lg" id="artist" placeholder="U2" #addArtist>
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="text" class="form-control input-lg" id="price" placeholder="13" #addPrice>
    </div>
    <div class="form-group">
      <label for="genre">Genre</label>
      <input type="text" class="form-control input-lg" id="genre" placeholder="U2" #addGenre>
    </div>
    <button (click)="addAlbum(addName, addArtist, addPrice, addGenre)" class="btn-danger btn-lg add-button">Add Album</button>
  </div>
  `
})

export class NewAlbumComponent {
  public onSubmitForm: EventEmitter<String[]>
  constructor(){
    this.onSubmitForm = new EventEmitter();
  }
  addAlbum(addName: HTMLInputElement, addArtist: HTMLInputElement,  addPrice: HTMLInputElement, addGenre: HTMLInputElement) {
    this.onSubmitForm.emit([addName.value, addArtist.value, addPrice.value, addGenre.value]);
    addName.value="";
    addArtist.value="";
    addPrice.value="";
    addGenre.value="";
  }
}
