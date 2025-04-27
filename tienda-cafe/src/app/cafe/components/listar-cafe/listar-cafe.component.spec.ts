import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCafeComponent } from './listar-cafe.component';

describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCafeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
