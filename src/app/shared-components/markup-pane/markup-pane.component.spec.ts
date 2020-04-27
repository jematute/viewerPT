import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupPaneComponent } from './markup-pane.component';

describe('MarkupPaneComponent', () => {
  let component: MarkupPaneComponent;
  let fixture: ComponentFixture<MarkupPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkupPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
