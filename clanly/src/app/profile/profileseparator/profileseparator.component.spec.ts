import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileseparatorComponent } from './profileseparator.component';

describe('ProfileseparatorComponent', () => {
  let component: ProfileseparatorComponent;
  let fixture: ComponentFixture<ProfileseparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileseparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileseparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
