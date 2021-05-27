import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFormTableComponent } from './characters-form-table.component';

describe('CharactersFormTableComponent', () => {
  let component: CharactersFormTableComponent;
  let fixture: ComponentFixture<CharactersFormTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersFormTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersFormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
