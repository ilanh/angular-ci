import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmSearchComponent } from './realm-search.component';

describe('RealmSearchComponent', () => {
  let component: RealmSearchComponent;
  let fixture: ComponentFixture<RealmSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
