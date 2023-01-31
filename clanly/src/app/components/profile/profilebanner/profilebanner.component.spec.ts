import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilebannerComponent } from './profilebanner.component';

describe('ProfilebannerComponent', () => {
  let component: ProfilebannerComponent;
  let fixture: ComponentFixture<ProfilebannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilebannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
