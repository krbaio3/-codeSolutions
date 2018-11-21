import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCodeCoreComponent } from './ngx-code-core.component';

describe('NgxCodeCoreComponent', () => {
  let component: NgxCodeCoreComponent;
  let fixture: ComponentFixture<NgxCodeCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCodeCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCodeCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
