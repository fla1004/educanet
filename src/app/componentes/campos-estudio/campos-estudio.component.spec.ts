import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposEstudioComponent } from './campos-estudio.component';

describe('CamposEstudioComponent', () => {
  let component: CamposEstudioComponent;
  let fixture: ComponentFixture<CamposEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamposEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamposEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
