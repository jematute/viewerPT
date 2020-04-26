import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewer2dComponent } from './viewer2d.component';

describe('Viewer2dComponent', () => {
  let component: Viewer2dComponent;
  let fixture: ComponentFixture<Viewer2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewer2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewer2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
