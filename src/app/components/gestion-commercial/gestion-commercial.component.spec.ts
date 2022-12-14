import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCommercialComponent } from './gestion-commercial.component';

describe('GestionCommercialComponent', () => {
  let component: GestionCommercialComponent;
  let fixture: ComponentFixture<GestionCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
