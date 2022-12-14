import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFormateurComponent } from './info-formateur.component';

describe('InfoFormateurComponent', () => {
  let component: InfoFormateurComponent;
  let fixture: ComponentFixture<InfoFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
