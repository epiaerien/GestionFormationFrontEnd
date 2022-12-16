import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePersoFormateurComponent } from './espace-perso-formateur.component';

describe('EspacePersoFormateurComponent', () => {
  let component: EspacePersoFormateurComponent;
  let fixture: ComponentFixture<EspacePersoFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacePersoFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacePersoFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
