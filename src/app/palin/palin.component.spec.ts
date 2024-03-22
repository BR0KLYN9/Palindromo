import { ComponentFixture, TestBed } from '@angular/core/testing';

import { palinComponent } from './palin.component';

describe('CodidgoComponent', () => {
  let component: palinComponent;
  let fixture: ComponentFixture<palinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [palinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(palinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
