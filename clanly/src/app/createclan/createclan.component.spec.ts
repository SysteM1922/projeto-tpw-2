import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclanComponent } from './createclan.component';

describe('CreateclanComponent', () => {
  let component: CreateclanComponent;
  let fixture: ComponentFixture<CreateclanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateclanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateclanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
