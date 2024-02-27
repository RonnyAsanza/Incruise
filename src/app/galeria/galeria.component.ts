import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  imageWidthMini: string = '175px';
  imageWidthMax: string = '350px';
  imageHeight: string = 'auto';

  constructor() {
    this.adjustImageWidth();
    window.addEventListener('resize', this.adjustImageWidth.bind(this));
  }
  adjustImageWidth() {
    if (window.innerWidth < 768) {
      this.imageWidthMini = '150px'; 
      this.imageWidthMax = '325px';
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      this.imageWidthMini = '225px'; 
      this.imageWidthMax = '500px';
    } else {
      this.imageWidthMini = '400px'; 
      this.imageHeight= '620px'
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.adjustImageWidth.bind(this));
  }
}
