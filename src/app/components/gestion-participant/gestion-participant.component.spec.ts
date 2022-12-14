import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionParticipantComponent } from './gestion-participant.component';

describe('GestionParticipantComponent', () => {
  let component: GestionParticipantComponent;
  let fixture: ComponentFixture<GestionParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
