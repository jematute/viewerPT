import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupToolbarComponent } from './markup-toolbar.component';

describe('MarkupToolbarComponent', () => {
  let component: MarkupToolbarComponent;
  let fixture: ComponentFixture<MarkupToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkupToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
