import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanformComponent } from './clanform.component';

describe('ClanformComponent', () => {
  let component: ClanformComponent;
  let fixture: ComponentFixture<ClanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
