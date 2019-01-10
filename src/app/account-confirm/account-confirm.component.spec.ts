import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountConfirmComponent } from './account-confirm.component';

describe('AccountConfirmComponent', () => {
  let component: AccountConfirmComponent;
  let fixture: ComponentFixture<AccountConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
