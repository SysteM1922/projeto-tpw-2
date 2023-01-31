import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclanComponent } from './editclan.component';

describe('EditclanComponent', () => {
  let component: EditclanComponent;
  let fixture: ComponentFixture<EditclanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditclanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditclanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
