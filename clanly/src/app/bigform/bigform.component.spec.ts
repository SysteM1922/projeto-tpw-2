import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigformComponent } from './bigform.component';

describe('BigformComponent', () => {
  let component: BigformComponent;
  let fixture: ComponentFixture<BigformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
