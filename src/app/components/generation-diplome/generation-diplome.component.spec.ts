import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationDiplomeComponent } from './generation-diplome.component';

describe('GenerationDiplomeComponent', () => {
  let component: GenerationDiplomeComponent;
  let fixture: ComponentFixture<GenerationDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
