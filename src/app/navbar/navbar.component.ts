import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  nombrePromotora: string = "ELIZABETH ZAMBRANO BERMEO";
  mensajeWhatsApp = encodeURIComponent('Hola, estoy interesado en obtener información totalmente personalizada y gratis para viajar y trabajar en InCruises.');
  enlaceWhatsApp = `https://wa.me/+34649926162?text=${this.mensajeWhatsApp}`;
  enlaceInstagram = `https://www.instagram.com/elzaberh_viaja_barato/`;
  enlaceTiktok = `https://www.tiktok.com/@elizabehz`;
  ngOnInit() {
    this.items = [
      {
        label: 'EXPERIENCIAS',
        icon: 'pi pi-camera',
      },
      {
        label: 'CONTACTO',
        icon: 'pi pi-phone',
        command: () => {
          window.open(this.enlaceWhatsApp, '_blank');
        }
      }
    ];
  }

}
