import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldListComponent } from './gold-list.component';

describe('GoldListComponent', () => {
  let component: GoldListComponent;
  let fixture: ComponentFixture<GoldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
