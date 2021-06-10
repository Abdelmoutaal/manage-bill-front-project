import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevisValideComponent } from './list-devis-valide.component';

describe('ListDevisValideComponent', () => {
  let component: ListDevisValideComponent;
  let fixture: ComponentFixture<ListDevisValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDevisValideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDevisValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
