import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertwordComponent } from './insertword.component';

describe('InsertwordComponent', () => {
  let component: InsertwordComponent;
  let fixture: ComponentFixture<InsertwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
