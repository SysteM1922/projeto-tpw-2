import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImage(image: string) {
    return 'https://system1922.pythonanywhere.com/images/' + image.split('/images/')[1] ;
  }
}
