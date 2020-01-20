import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEmpleadoComponent } from './perfil-empleado.component';

describe('PerfilEmpleadoComponent', () => {
  let component: PerfilEmpleadoComponent;
  let fixture: ComponentFixture<PerfilEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
