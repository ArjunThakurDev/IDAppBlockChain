import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserauthdashComponent } from './userauthdash.component';

describe('UserauthdashComponent', () => {
  let component: UserauthdashComponent;
  let fixture: ComponentFixture<UserauthdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserauthdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserauthdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
