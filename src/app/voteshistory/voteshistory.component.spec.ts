import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteshistoryComponent } from './voteshistory.component';

describe('VoteshistoryComponent', () => {
  let component: VoteshistoryComponent;
  let fixture: ComponentFixture<VoteshistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteshistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
