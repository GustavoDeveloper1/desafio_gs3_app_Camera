import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  photos!: any[];

  constructor(
    private servicePhoto: PhotoService,
    private alertController: AlertController
  ) {}
  ngOnInit(): void {
    this.photos = this.servicePhoto.photos;
    console.log(this.photos);

    if (this.photos.length == 0) {
      this.noPhotoAlert()
    }
  }

  takePhoto() {
    this.servicePhoto.addNewToGallery();
  }

  async noPhotoAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Não há fotos',
      message: 'Não há fotos no sistema clique no + para adicionar uma foto!',
      buttons: ['OK'],
    });

    alert.present();
  }

  getGalery() {
    this.servicePhoto.pickImageGalery()
  }

  toggleTheme(event: any) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
