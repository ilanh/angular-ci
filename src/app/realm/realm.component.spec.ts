import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmComponent } from './realm.component';

describe('RealmComponent', () => {
  let component: RealmComponent;
  let fixture: ComponentFixture<RealmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
