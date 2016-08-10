module AlbumList {
  export interface IAlbum {
    name: string;
    artist: string;
    price: number;
    genre: string;
  }

  export class Album implements IAlbum {
    constructor(public name: string, public artist: string, public price: number, public genre: string){}
  }
}
