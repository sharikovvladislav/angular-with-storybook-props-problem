import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithControlValueAccessorComponent } from './with-control-value-accessor.component';

describe('WithControlValueAccessorComponent', () => {
  let component: WithControlValueAccessorComponent;
  let fixture: ComponentFixture<WithControlValueAccessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithControlValueAccessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithControlValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
