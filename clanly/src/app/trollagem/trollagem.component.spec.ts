import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrollagemComponent } from './trollagem.component';

describe('TrollagemComponent', () => {
  let component: TrollagemComponent;
  let fixture: ComponentFixture<TrollagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrollagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrollagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
