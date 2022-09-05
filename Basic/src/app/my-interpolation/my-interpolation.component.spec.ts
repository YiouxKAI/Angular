import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInterpolationComponent } from './my-interpolation.component';

describe('MyInterpolationComponent', () => {
  let component: MyInterpolationComponent;
  let fixture: ComponentFixture<MyInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
