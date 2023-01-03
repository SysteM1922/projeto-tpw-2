import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclansComponent } from './myclans.component';

describe('MyclansComponent', () => {
  let component: MyclansComponent;
  let fixture: ComponentFixture<MyclansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyclansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
