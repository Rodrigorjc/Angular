import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresivaComponent } from './regresiva.component';

describe('RegresivaComponent', () => {
  let component: RegresivaComponent;
  let fixture: ComponentFixture<RegresivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegresivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegresivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
