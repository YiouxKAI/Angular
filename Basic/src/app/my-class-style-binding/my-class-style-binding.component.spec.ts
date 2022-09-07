import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassStyleBindingComponent } from './my-class-style-binding.component';

describe('MyClassStyleBindingComponent', () => {
  let component: MyClassStyleBindingComponent;
  let fixture: ComponentFixture<MyClassStyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyClassStyleBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyClassStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
