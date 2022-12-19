import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDiplomeComponent } from './ajout-diplome.component';

describe('AjoutDiplomeComponent', () => {
  let component: AjoutDiplomeComponent;
  let fixture: ComponentFixture<AjoutDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
