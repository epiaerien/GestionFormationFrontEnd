import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeappelrendezvousComponent } from './listeappelrendezvous.component';

describe('ListeappelrendezvousComponent', () => {
  let component: ListeappelrendezvousComponent;
  let fixture: ComponentFixture<ListeappelrendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeappelrendezvousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeappelrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
