import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaGPSComponent } from './guia-gps.component';

describe('GuiaGPSComponent', () => {
  let component: GuiaGPSComponent;
  let fixture: ComponentFixture<GuiaGPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaGPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaGPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
