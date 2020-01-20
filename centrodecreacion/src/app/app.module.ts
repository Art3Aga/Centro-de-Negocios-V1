import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './componentes/menu/menu.component';

// Servicios
import { MensajesService } from './servicios/mensajes.service';

// Angular Material
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule,
  MatSidenavModule, MatListModule, MatTabsModule, MatGridListModule, MatExpansionModule,
  MatCardModule, MatSlideToggleModule, MatChipsModule, MatSliderModule, MatTableModule, MatBadgeModule,
  MatSnackBarModule, MatFormFieldModule, MatDialogModule, MatTooltipModule,
  MatButtonToggleModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
// HTTP
import { HttpClientModule } from '@angular/common/http';
// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { PerfilEmpleadoComponent } from './componentes/perfil-empleado/perfil-empleado.component';
import { VerCurriculumComponent } from './componentes/ver-curriculum/ver-curriculum.component';
// import { SnackbarComponent } from './widgets/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmpleadosComponent,
    BienvenidaComponent,
    PerfilEmpleadoComponent,
    VerCurriculumComponent,
    // SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule,
    MatSidenavModule, MatListModule, MatTabsModule, MatGridListModule, MatExpansionModule,
    MatCardModule, MatSlideToggleModule, MatChipsModule, MatSliderModule, MatTableModule,
    MatBadgeModule, MatSnackBarModule, MatFormFieldModule, MatDialogModule, MatTooltipModule,
    MatButtonToggleModule, MatDatepickerModule, MatNativeDateModule,
    HttpClientModule
  ],
  providers: [ MensajesService ],
  bootstrap: [AppComponent],
  entryComponents: [ PerfilEmpleadoComponent, VerCurriculumComponent ],
})
export class AppModule { }
