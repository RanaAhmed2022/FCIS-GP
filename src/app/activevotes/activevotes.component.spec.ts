import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivevotesComponent } from './activevotes.component';

describe('ActivevotesComponent', () => {
  let component: ActivevotesComponent;
  let fixture: ComponentFixture<ActivevotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivevotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivevotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
