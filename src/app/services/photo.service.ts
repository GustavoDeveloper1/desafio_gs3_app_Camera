import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
  GalleryImageOptions,
} from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  photos: any[] = [];
  constructor() {}

  public async addNewToGallery() {
    const getPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    console.log(typeof uuid());
    this.photos.push({
      nome: uuid(),
      source: getPhoto.webPath,
    });
  }

  public async pickImageGalery() {
    const getGalery = await Camera.pickImages({
      width: 1000,
      height: 1000,

    });

    this.photos.unshift({
      nome: uuid(),
      source: getGalery.photos,
    });
  }
}
