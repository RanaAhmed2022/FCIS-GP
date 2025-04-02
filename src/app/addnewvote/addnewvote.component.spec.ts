import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewvoteComponent } from './addnewvote.component';

describe('AddnewvoteComponent', () => {
  let component: AddnewvoteComponent;
  let fixture: ComponentFixture<AddnewvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewvoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
