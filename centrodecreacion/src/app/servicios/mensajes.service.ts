import { VerCurriculumComponent } from './../componentes/ver-curriculum/ver-curriculum.component';
import { PerfilEmpleadoComponent } from './../componentes/perfil-empleado/perfil-empleado.component';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  constructor(private snackbar: MatSnackBar, private dialog: MatDialog) {
  }
  public ShowMensaje(message: string, button: string, duration: number, panelClass: any, position: any) {
    this.snackbar.open(message, button, {
      duration,
      panelClass: [`${panelClass}`],
      verticalPosition: position
    });
  }
  public OpenModal() {

  }
  public OpenModalPerfil() {
    this.dialog.open(PerfilEmpleadoComponent, {
      /*width: '850px',
      height: '650px',
      maxHeight: '650px',
      minHeight: '650px',
      minWidth: '850px',
      maxWidth: '850px',*/
      width: '75%',
      minWidth: '75%',
      maxWidth: '75%',
      height: '99.9%',
      maxHeight: '99.9%',
      minHeight: '99.9%',
    });
  }
  public OpenModalCurriculum() {
    this.dialog.open(VerCurriculumComponent, {
      width: '75%',
      minWidth: '75%',
      maxWidth: '75%',
      height: '99.9%',
      maxHeight: '99.9%',
      minHeight: '99.9%',
    });
  }
}
