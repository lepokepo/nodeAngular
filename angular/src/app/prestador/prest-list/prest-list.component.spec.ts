import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestListComponent } from './prest-list.component';

describe('PrestListComponent', () => {
  let component: PrestListComponent;
  let fixture: ComponentFixture<PrestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
