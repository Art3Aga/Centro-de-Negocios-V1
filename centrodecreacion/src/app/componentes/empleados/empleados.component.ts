import { PdfsService } from './../../servicios/pdfs.service';
import { MensajesService } from './../../servicios/mensajes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  constructor(public mensajeService: MensajesService, public pdfService: PdfsService) { }

  ngOnInit() {
  }

  VerPerfil() {
    this.mensajeService.OpenModalPerfil();
  }
  VerCurriculumPDF() {
    // this.pdfService.GenerarPDF();
    this.mensajeService.OpenModalCurriculum();
  }

}
