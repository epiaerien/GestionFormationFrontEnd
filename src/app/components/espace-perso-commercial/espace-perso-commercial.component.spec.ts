import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePersoCommercialComponent } from './espace-perso-commercial.component';

describe('EspacePersoCommercialComponent', () => {
  let component: EspacePersoCommercialComponent;
  let fixture: ComponentFixture<EspacePersoCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacePersoCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacePersoCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
