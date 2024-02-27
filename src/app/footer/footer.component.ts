import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photoservice';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  nombres: string = "";
  apellidos: string = "";
  telefono: string = "";
  email: string = "";
  comentario: string = "";
  loading: boolean = false;
  images: any[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions =
      [
        {
          breakpoint: '3500px',
          numVisible: 6
        },
        {
          breakpoint: '1555px',
          numVisible: 5
        },
        {
          breakpoint: '1255px',
          numVisible: 4
        },
        {
          breakpoint: '1024px',
          numVisible: 3
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ];
  }

  load() {
    this.loading = true;
    this.sendMessage();
    setTimeout(() => {
      this.loading = false
      alert("Mensaje enviado");
    }, 2500);
  }

  sendMessage(): void {
    // Detalles personales del interesado
    const nombres = this.nombres;
    const apellidos = this.apellidos;
    const telefono = this.telefono;
    const email = this.email;
    const comentario = this.comentario;

    // Mensaje promocional sobre inCruises
    const intro = `*Hola, mi nombre es ${nombres} ${apellidos}.* \n Estoy muy interesado en la increíble oportunidad que ofrece inCruises. Con inCruises, puedo disfrutar de viajes de crucero de lujo a precios accesibles, y hasta la posibilidad de ganar mientras viajo. \n\n ¡Es una oportunidad única para viajar o trabajar a bordo de algunos de los cruceros más espectaculares del mundo!`;
    const mensajePersonal = `Quiero obtener más información sobre cómo puedo ser parte de esta experiencia transformadora. \n\n Aquí están mis detalles de contacto: \n *Teléfono:* ${telefono} \n *Email:* ${email}. Además, quiero compartirles lo siguiente: \n ${comentario}`;
    const mensajeCompleto = `${intro}\n\n${mensajePersonal}`;

    const mensajeWhatsApp = encodeURIComponent(mensajeCompleto);
    const tuNumeroWhatsApp = '+34649926162'; 
    const urlWhatsApp = `https://wa.me/${tuNumeroWhatsApp}?text=${mensajeWhatsApp}`;

    window.open(urlWhatsApp, '_blank');
  }

}
