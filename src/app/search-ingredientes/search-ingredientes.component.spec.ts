import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIngredientesComponent } from './search-ingredientes.component';

describe('SearchIngredientesComponent', () => {
  let component: SearchIngredientesComponent;
  let fixture: ComponentFixture<SearchIngredientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIngredientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
