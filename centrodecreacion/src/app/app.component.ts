import { MensajesService } from './servicios/mensajes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  hide: boolean;
  siguientePagina: boolean;
  constructor(private mensajeService: MensajesService) {}

  Login() {
    this.siguientePagina = true;
    this.mensajeService.ShowMensaje('Bienvenido Albery Arteaga', '', 2000, 'bottom', '');
  }
}
