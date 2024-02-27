import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { FooterComponent } from './footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { GaleriaComponent } from './galeria/galeria.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NosotrosComponent,
    PreguntasComponent,
    FooterComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    AccordionModule,
    InputTextModule,
    InputTextareaModule,
    GalleriaModule,
    FormsModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
