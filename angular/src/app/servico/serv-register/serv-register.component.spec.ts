import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServRegisterComponent } from './serv-register.component';

describe('ServRegisterComponent', () => {
  let component: ServRegisterComponent;
  let fixture: ComponentFixture<ServRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
