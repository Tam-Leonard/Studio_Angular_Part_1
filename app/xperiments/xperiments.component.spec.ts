import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XperimentsComponent } from './xperiments.component';

describe('XperimentsComponent', () => {
  let component: XperimentsComponent;
  let fixture: ComponentFixture<XperimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XperimentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
