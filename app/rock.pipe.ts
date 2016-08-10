import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from './album.model';

@Pipe ({
  name: "rock",
  pure: false
})

export class RockPipe implements PipeTransform {
  transform = function (input: Album[]) {
    var output: Album[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].rock === false) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
