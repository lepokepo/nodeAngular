import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestRegisterComponent } from './prest-register.component';

describe('PrestRegisterComponent', () => {
  let component: PrestRegisterComponent;
  let fixture: ComponentFixture<PrestRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
