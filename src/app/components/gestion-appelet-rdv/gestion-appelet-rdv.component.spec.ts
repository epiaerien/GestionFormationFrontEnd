import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAppeletRdvComponent } from './gestion-appelet-rdv.component';

describe('GestionAppeletRdvComponent', () => {
  let component: GestionAppeletRdvComponent;
  let fixture: ComponentFixture<GestionAppeletRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAppeletRdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAppeletRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
