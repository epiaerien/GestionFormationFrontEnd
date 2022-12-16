import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacepersoCommercialComponent } from './espaceperso-commercial.component';

describe('EspacepersoCommercialComponent', () => {
  let component: EspacepersoCommercialComponent;
  let fixture: ComponentFixture<EspacepersoCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacepersoCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacepersoCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
