import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCursosComponent } from './informacion-cursos.component';

describe('InformacionCursosComponent', () => {
  let component: InformacionCursosComponent;
  let fixture: ComponentFixture<InformacionCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
