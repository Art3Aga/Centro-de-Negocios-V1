import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCurriculumComponent } from './ver-curriculum.component';

describe('VerCurriculumComponent', () => {
  let component: VerCurriculumComponent;
  let fixture: ComponentFixture<VerCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
