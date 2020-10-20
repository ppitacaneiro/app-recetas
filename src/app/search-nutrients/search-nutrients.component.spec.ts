import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNutrientsComponent } from './search-nutrients.component';

describe('SearchNutrientsComponent', () => {
  let component: SearchNutrientsComponent;
  let fixture: ComponentFixture<SearchNutrientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNutrientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNutrientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
