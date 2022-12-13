import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPayementComponent } from './gestion-payement.component';

describe('GestionPayementComponent', () => {
  let component: GestionPayementComponent;
  let fixture: ComponentFixture<GestionPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPayementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
