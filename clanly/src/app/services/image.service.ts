import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImage(image: string) {
    return 'http://localhost:8000/images/' + image;
  }
}
