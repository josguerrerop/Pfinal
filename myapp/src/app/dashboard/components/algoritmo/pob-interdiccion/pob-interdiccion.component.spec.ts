import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PobInterdiccionComponent } from './pob-interdiccion.component';

describe('PobInterdiccionComponent', () => {
  let component: PobInterdiccionComponent;
  let fixture: ComponentFixture<PobInterdiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PobInterdiccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PobInterdiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
