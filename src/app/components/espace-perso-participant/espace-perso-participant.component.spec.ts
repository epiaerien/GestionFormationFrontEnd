import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePersoParticipantComponent } from './espace-perso-participant.component';

describe('EspacePersoParticipantComponent', () => {
  let component: EspacePersoParticipantComponent;
  let fixture: ComponentFixture<EspacePersoParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacePersoParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacePersoParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
